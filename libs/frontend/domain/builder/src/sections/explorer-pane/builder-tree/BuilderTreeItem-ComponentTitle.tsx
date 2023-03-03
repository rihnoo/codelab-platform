import type {
  IBuilderService,
  IComponent,
  IElementService,
} from '@codelab/frontend/abstract/core'
import { isElement } from '@codelab/frontend/abstract/core'
import { CreateElementButton } from '@codelab/frontend/domain/element'
import { Col, Row } from 'antd'
import { observer } from 'mobx-react-lite'
import React from 'react'
import tw from 'twin.macro'

interface BuilderTreeItemComponentTitleProps {
  component: IComponent
  elementService: IElementService
  builderService: IBuilderService
}

export const BuilderTreeItemComponentTitle = observer(
  ({
    builderService,
    component,
    elementService,
  }: BuilderTreeItemComponentTitleProps) => {
    const { selectedNode } = builderService
    const selectedNodeId = isElement(selectedNode) && selectedNode.id

    return (
      <Row justify="space-between">
        <Col css={tw`px-2`}>{component.name}</Col>
        <Col css={tw`px-2`}>
          <CreateElementButton
            createModal={elementService.createModal}
            elementTreeId={component.elementTree?.id || ''}
            key={0}
            selectedElementId={selectedNodeId || component.rootElementId}
            type="text"
          />
        </Col>
      </Row>
    )
  },
)