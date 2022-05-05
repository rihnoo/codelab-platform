import { ELEMENT_SERVICE, WithServices } from '@codelab/frontend/abstract/core'
import { Nullable } from '@codelab/shared/abstract/types'
import { Dropdown } from 'antd'
import { DataNode } from 'antd/lib/tree'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import tw from 'twin.macro'
import { BuilderTreeItemOverlay } from './BuilderTreeItemOverlay'

type BuilderTreeItemTitleProps = WithServices<ELEMENT_SERVICE> & {
  node: DataNode
}

export const BuilderTreeItemTitle = observer<BuilderTreeItemTitleProps>(
  ({ node, elementService }) => {
    const [contextMenuItemId, setContextMenuNodeId] =
      useState<Nullable<string>>(null)

    const element = elementService.elementTree.element(node.key.toString())

    if (!element) {
      return null
    }

    const atomName = element.atom?.current?.name || element.atom?.current?.type
    const componentInstanceName = element.instanceOfComponent?.current?.name
    const isComponentInstance = !!element.instanceOfComponent

    const componentMeta = componentInstanceName
      ? `(instance of ${componentInstanceName || 'a Component'})`
      : undefined

    const atomMeta = atomName ? `(${atomName})` : undefined
    const meta = componentMeta || atomMeta || ''

    return (
      <div>
        <Dropdown
          onVisibleChange={(visible) =>
            setContextMenuNodeId(visible ? element.id : null)
          }
          overlay={
            <BuilderTreeItemOverlay
              element={element}
              elementService={elementService}
              setContextMenuNodeId={setContextMenuNodeId}
            />
          }
          trigger={['contextMenu']}
          visible={contextMenuItemId === element.id}
        >
          <div css={isComponentInstance ? tw`text-blue-400` : `text-gray-400`}>
            {element.label} <span css={tw`text-xs`}>{meta}</span>
          </div>
        </Dropdown>
      </div>
    )
  },
)