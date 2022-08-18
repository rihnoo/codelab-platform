import { PlusOutlined } from '@ant-design/icons'
import { typeRef } from '@codelab/frontend/modules/type'
import {
  IActionService,
  IAppService,
  IInterfaceType,
  IStoreService,
  ITypeService,
} from '@codelab/shared/abstract/core'
import { Button, Collapse } from 'antd'
import { Ref } from 'mobx-keystone'
import { observer } from 'mobx-react-lite'
import React from 'react'
import tw from 'twin.macro'
import { useCurrentStore } from '../hooks'
import { GetActionsList, GetStateList } from '../use-cases'

type StoreExplorerPaneProps = {
  typeService: ITypeService
  actionService: IActionService
  appService: IAppService
  storeService: IStoreService
}

export const StoreExplorerPane = observer<StoreExplorerPaneProps>(
  ({ typeService, actionService, appService, storeService }) => {
    const { store } = useCurrentStore(appService, storeService)

    if (!store) {
      return null
    }

    const StateButton = (
      <Button
        icon={<PlusOutlined />}
        onClick={(event) => {
          event.stopPropagation()
          typeService.fieldCreateModal.open(
            typeRef(store.stateApiId) as Ref<IInterfaceType>,
          )
        }}
        size="small"
        title="Create State"
        type="primary"
      />
    )

    const ActionButton = (
      <Button
        icon={<PlusOutlined />}
        onClick={(event) => {
          event.stopPropagation()
          actionService.createModal.open()
        }}
        size="small"
        title="Create Action"
        type="primary"
      />
    )

    return (
      <Collapse defaultActiveKey={['actions', 'state']} ghost>
        <Collapse.Panel
          extra={[StateButton]}
          header={<p css={tw`font-bold`}>State</p>}
          key="state"
        >
          <GetStateList store={store} typeService={typeService} />
        </Collapse.Panel>
        <Collapse.Panel
          extra={[ActionButton]}
          header={<p css={tw`font-bold`}>Actions</p>}
          key="actions"
        >
          <GetActionsList actionService={actionService} store={store} />
        </Collapse.Panel>
      </Collapse>
    )
  },
)