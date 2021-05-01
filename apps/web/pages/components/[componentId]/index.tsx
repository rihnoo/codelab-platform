import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { ComponentContext } from '@codelab/frontend/shared'
import React, { useContext } from 'react'
import { Empty, Tabs } from 'antd'
import { ComponentRenderer } from '@codelab/modules/component'
import { TabsLayout } from 'apps/web/src/layout/Layout-pane'
import { PaneConfigComponentElement } from '@codelab/modules/component-element'
import { useBuilderSelectionState } from '@codelab/frontend/builder'
import { NextPageLayout } from '../../../src/layout/Layout.d'
import { LayoutComponentDetail } from 'apps/web/src/layout/Layout--componentDetail'

const ComponentDetail: NextPageLayout<'builder'> = () => {
  const { component } = useContext(ComponentContext)

  if (!component) {
    return <Empty />
  }

  return (
    <div id="Builder" style={{ position: 'relative' }}>
      <h1>Component: {component?.label}</h1>
      <ComponentRenderer component={component} />
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired()

const ComponentDetailMainPane = (props: { componentElementId: string }) => {
  const {
    selectionState: { selectedElement },
  } = useBuilderSelectionState()

  if (!selectedElement) {
    return <></>
  }

  return (
    <TabsLayout>
      <Tabs.TabPane tab="Inspector" key="1" style={{ height: '100%' }}>
        <PaneConfigComponentElement
          componentElementId={selectedElement.componentElementId}
        />
      </Tabs.TabPane>
    </TabsLayout>
  )
}

ComponentDetail.Layout = LayoutComponentDetail
ComponentDetail.MainPane = ComponentDetailMainPane

export default ComponentDetail
