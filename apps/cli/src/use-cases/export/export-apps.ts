import { AppOGM, appSelectionSet } from '@codelab/backend/adapter/neo4j'
import { IAppExport } from '@codelab/shared/abstract/core'
import { ExportAppWhere } from '../../commands/export/export.types'
import { getApp } from '../../repository/app.repo'

export interface ExportAppData {
  app: IAppExport
}

export const exportApps = async ({ appIds }: ExportAppWhere) => {
  const App = await AppOGM({ reinitialize: true })
  const where = appIds ? { id_IN: appIds } : {}

  const apps = await App.find({
    where,
    selectionSet: appSelectionSet,
  })

  return apps.reduce(async (appsData, app) => {
    const { app: appExport } = await getApp(app)

    return [...(await appsData), appExport]
  }, Promise.resolve<Array<IAppExport>>([]))
}