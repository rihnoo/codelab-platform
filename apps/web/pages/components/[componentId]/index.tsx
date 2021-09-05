import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { CodelabPage } from '@codelab/frontend/abstract/props'
import {
  Builder,
  defaultRenderContext,
  MainPaneBuilderComponent,
  MetaPaneBuilderComponent,
} from '@codelab/frontend/modules/builder'
import {
  ComponentContext,
  withComponentQueryProvider,
} from '@codelab/frontend/modules/component'
import {
  RenderProvider,
  withEditorProvider,
} from '@codelab/frontend/presenter/container'
import {
  DashboardTemplate,
  SidebarNavigation,
} from '@codelab/frontend/view/templates'
import { Empty } from 'antd'
import Head from 'next/head'
import React, { useContext } from 'react'

const ComponentDetail: CodelabPage = () => {
  const { component, tree } = useContext(ComponentContext)

  if (!tree || !component) {
    return <Empty />
  }

  return (
    <RenderProvider context={defaultRenderContext({ tree })}>
      <Head>
        <title>{component.name} | Codelab</title>
      </Head>

      <Builder tree={tree} />
    </RenderProvider>
  )
}

export const getServerSideProps = withPageAuthRequired()

ComponentDetail.Template = withEditorProvider(
  withComponentQueryProvider(DashboardTemplate),
)
ComponentDetail.MainPane = MainPaneBuilderComponent
ComponentDetail.MetaPane = MetaPaneBuilderComponent
ComponentDetail.Header = null
ComponentDetail.SidebarNavigation = SidebarNavigation

export default ComponentDetail
