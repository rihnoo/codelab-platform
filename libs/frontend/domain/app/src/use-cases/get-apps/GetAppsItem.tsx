import type { IApp, IDomain } from '@codelab/frontend/abstract/core'
import { PageType } from '@codelab/frontend/abstract/types'
import { Card } from 'antd'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import React from 'react'
import { DomainsList } from './DomainsList'
import { ItemDropdown } from './ItemDropdown'

export interface GetAppsItemProps {
  app: IApp
  domains?: Array<IDomain>
}

export const GetAppsItem = observer<GetAppsItemProps>(({ app }) => {
  const href = { pathname: PageType.PageList, query: { appId: app.id } }
  const domains = app.domains.map((domain) => domain.current)
  const Title = <Link href={href}>{app.name}</Link>
  const Dropdown = <ItemDropdown app={app} domains={domains} />

  return (
    <Card extra={Dropdown} title={Title}>
      <DomainsList domains={domains} />
    </Card>
  )
})
