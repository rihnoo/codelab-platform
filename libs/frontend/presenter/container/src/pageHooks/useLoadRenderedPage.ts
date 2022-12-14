import { useState } from 'react'
import { useAsync } from 'react-use'
import { useStore } from '../providers'
import { useCurrentAppId, useCurrentPageId } from '../routerHooks'

/**
 * Fetch related data for rendering page, and load them into store
 */
export const useLoadRenderedPage = () => {
  const {
    appService,
    storeService,
    typeService,
    componentService,
    resourceService,
    pageService,
  } = useStore()

  const appId = useCurrentAppId()
  const initialPageId = useCurrentPageId()
  const [currentPageId, setCurrentPageId] = useState(initialPageId)

  const commonPagesData = useAsync(async () => {
    const { apps, components, resources, ...types } =
      await pageService.getRenderedPageAndCommonAppData(appId, currentPageId)

    const [app] = apps

    if (!app) {
      return null
    }

    const [currentPage, providerPage] = app.pages
      .sort((page) => (page.isProvider ? 1 : -1))
      .map((page) => appService.load({ app, pageId: page.id }))

    if (!currentPage) {
      return null
    }

    const { pageElementTree: pageTree, page } = currentPage
    const { pageElementTree: appTree } = providerPage ?? {}

    typeService.load({ ...types })

    components.map((component) =>
      componentService.loadRenderedComponentTree(component),
    )

    resources.map((resource) => resourceService.writeCache(resource))

    // hydrate after types and resources
    const appStore = storeService.writeCache(app.store)
    appStore.state.setMany(appService.appsJson)
    appStore.state.set('redirectToPage', setCurrentPageId)

    return {
      app,
      page,
      pageTree,
      appTree,
      appStore,
      components: componentService.componentList,
    }
  }, [])

  const currentPageData = useAsync(async () => {
    if (!commonPagesData.value) {
      return null
    }

    const { app, appTree, appStore, components } = commonPagesData.value
    const alreadyLoadedPage = pageService.pages.get(currentPageId)

    if (alreadyLoadedPage) {
      const pageTree = alreadyLoadedPage.elementTree

      return {
        page: alreadyLoadedPage,
        pageTree,
        appTree,
        appStore,
        components,
      }
    }

    const { pages } = await pageService.getRenderedPage(currentPageId)
    const [loadedPage] = pages

    if (!loadedPage) {
      return null
    }

    const pageId = loadedPage.id
    app.pages.push(loadedPage)

    const { pageElementTree: pageTree, page } = appService.load({ app, pageId })

    return { page, pageTree, appTree, appStore, components }
  }, [currentPageId, commonPagesData])

  const loading = commonPagesData.loading || currentPageData.loading
  const error = commonPagesData.error ?? currentPageData.error
  const value = currentPageData.value

  return { loading, error, value }
}
