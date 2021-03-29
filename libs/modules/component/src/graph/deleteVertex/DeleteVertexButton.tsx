import { Button } from 'antd'
import React, { useContext } from 'react'
import { AppContext, PropsWithIds } from '@codelab/frontend/shared'
import { GetPageGql, useDeleteVertexMutation } from '@codelab/generated'

export const DeleteVertexButton = ({ vertexId }: PropsWithIds<'vertexId'>) => {
  const { pageId } = useContext(AppContext)
  const [deleteVertex] = useDeleteVertexMutation({
    variables: {
      input: {
        vertexId,
      },
    },
    refetchQueries: [
      {
        query: GetPageGql,
        variables: {
          input: {
            pageId,
          },
        },
      },
    ],
  })

  return (
    <Button danger type="default" onClick={() => deleteVertex()}>
      Delete
    </Button>
  )
}