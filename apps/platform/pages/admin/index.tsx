import { PageHeader } from '@ant-design/pro-components/lib'
import type { CodelabPage } from '@codelab/frontend/abstract/types'
import {
  ExportAdminDataButton,
  ImportDataButton,
} from '@codelab/frontend/domain/admin'
import {
  useCurrentAppId,
  useCurrentPageId,
} from '@codelab/frontend/presentation/container'
import type { DashboardTemplateProps } from '@codelab/frontend/presentation/view'
import {
  ContentSection,
  DashboardTemplate,
  sidebarNavigation,
} from '@codelab/frontend/presentation/view'
import { auth0Instance } from '@codelab/shared/infra/auth0'
import { Space } from 'antd'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import React from 'react'
import tw from 'twin.macro'

const AdminPage: CodelabPage<DashboardTemplateProps> = observer(() => {
  return (
    <>
      <Head>
        <title>Apps | Codelab</title>
      </Head>
      <ContentSection css={tw`p-4 bg-white`}>
        <Space>
          <ExportAdminDataButton />
          <ImportDataButton />
        </Space>
      </ContentSection>
    </>
  )
})

export default AdminPage

export const getServerSideProps = auth0Instance.withPageAuthRequired()

AdminPage.Layout = ({ children }) => {
  const AdminHeader = () => <PageHeader ghost={false} title="Admin" />
  const appId = useCurrentAppId()
  const pageId = useCurrentPageId()

  return (
    <DashboardTemplate
      Header={AdminHeader}
      sidebarNavigation={sidebarNavigation({ appId, pageId })}
    >
      {children()}
    </DashboardTemplate>
  )
}