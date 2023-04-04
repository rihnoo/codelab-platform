import type { ITag } from '@codelab/frontend/abstract/core'
import { PageType } from '@codelab/frontend/abstract/types'
import { useStore } from '@codelab/frontend/presenter/container'
import { useAsync } from '@react-hookz/web'
import { Table } from 'antd'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { atomRef } from '../../store'
import type { AtomLibrary, AtomRecord } from './columns'
import { useAtomTable } from './useAtomTable'

const DEFAULT_PAGE_SIZE = 25
const DEFAULT_CUR_PAGE = 1

interface AtomsTableProps {
  page?: number
  pageSize?: number

  getAtomLibrary(atomType: string): AtomLibrary
}

export const AtomsTable = observer<AtomsTableProps>(
  ({ getAtomLibrary, page, pageSize }) => {
    const { atomService, fieldService, typeService } = useStore()
    const { atomsList } = atomService

    if (atomsList.length) {
      const ref = atomRef(atomsList[0]!.id)
      console.log(ref)
    }

    const router = useRouter()
    const curPage = page ?? DEFAULT_CUR_PAGE
    const curPageSize = pageSize ?? DEFAULT_PAGE_SIZE

    const { atomOptions, atomWhere, columns, pagination, rowSelection } =
      useAtomTable({ atomService, fieldService, typeService })

    const [{ result: latestFetchedAtoms, status }, getAllAtoms] = useAsync(() =>
      atomService.getAll(atomWhere, atomOptions),
    )

    const handlePageChange = useCallback(
      (newPage: number, newPageSize: number) => {
        void router.push({
          pathname: PageType.Atom,
          query: {
            page: newPage,
            pageSize: newPageSize,
          },
        })
      },
      [router],
    )

    /**
     * Change page if specified
     */
    useEffect(() => {
      if (curPage && pageSize) {
        pagination.onChange?.(curPage, pageSize)
      }

      void getAllAtoms.execute()
    }, [curPage, pageSize, pagination])

    const curPageDataStartIndex = atomsList.findIndex(
      ({ name }) => name === latestFetchedAtoms?.[0]?.name,
    )

    const atomsData: Array<AtomRecord> = atomsList
      .slice(
        curPageDataStartIndex >= 0 ? curPageDataStartIndex : 0,
        (curPageDataStartIndex >= 0 ? curPageDataStartIndex : 0) + curPageSize,
      )
      .map((atom) => ({
        apiId: atom.api.id,
        id: atom.id,
        library: getAtomLibrary(atom.type),
        name: atom.name,
        requiredParents: atom.requiredParents.map(
          (children) => children.current,
        ),
        suggestedChildren: atom.suggestedChildren.map(
          (children) => children.current,
        ),
        tags: atom.tags
          .map((tag) => tag.maybeCurrent)
          .filter(Boolean) as Array<ITag>,
        type: atom.type,
      }))

    return (
      <Table
        columns={columns}
        dataSource={atomsData}
        loading={status === 'loading'}
        pagination={{
          ...pagination,
          current: curPage,
          onChange: handlePageChange,
          pageSize: curPageSize,
        }}
        rowKey={(atom) => atom.id}
        rowSelection={rowSelection}
        scroll={{ y: '80vh' }}
      />
    )
  },
)