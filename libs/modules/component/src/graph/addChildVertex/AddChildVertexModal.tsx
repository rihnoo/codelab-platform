import React, { useContext } from 'react'
import { useRecoilState } from 'recoil'
import {
  AddChildVertexForm,
  AddChildVertexFormProps,
} from './AddChildVertexForm'
import { addChildVertexState } from './AddChildVertexState'
import { AppContext, ModalForm } from '@codelab/frontend/shared'

export const AddChildVertexModal = ({
  vertex,
  parentVertexId,
}: AddChildVertexFormProps) => {
  const [addChildVertex, setAddChildVertex] = useRecoilState(
    addChildVertexState,
  )
  const { pageId } = useContext(AppContext)

  return (
    <ModalForm
      modalProps={{
        okText: 'Add Child Vertex',
        okButtonProps: {},
        visible: addChildVertex.visible,
        onCancel: () => setAddChildVertex({ visible: false }),
        onOk: () => setAddChildVertex({ visible: false }),
      }}
      renderForm={() => (
        <AddChildVertexForm
          pageId={pageId}
          vertex={vertex}
          parentVertexId={parentVertexId}
        />
      )}
    />
  )
}