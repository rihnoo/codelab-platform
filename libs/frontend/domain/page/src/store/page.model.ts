import type { IPage, IPropData } from '@codelab/frontend/abstract/core'
import { IElement, IPageDTO } from '@codelab/frontend/abstract/core'
import { ElementTreeService } from '@codelab/frontend/domain/element'
import { extractSlug } from '@codelab/frontend/shared/utils'
import type { IEntity, Nullish } from '@codelab/shared/abstract/types'
import { computed } from 'mobx'
import { ExtendedModel, idProp, model, modelAction, prop } from 'mobx-keystone'
import { pageApi } from './page.api'

const getServerSideProps = async (context: IPropData) => {
  const id = context.params?.pageId as string

  const {
    pages: [page],
  } = await pageApi.GetPages({ where: { id } })

  if (!page || !page.getServerSideProps) {
    return { props: {} }
  }

  const {
    props = {},
    notFound = false,
    redirect = undefined,
  } = await eval(`(${page.getServerSideProps})`)(context)

  return { props, notFound, redirect }
}

const hydrate = (page: IPageDTO) => {
  return new Page({
    id: page.id,
    name: page.name,
    slug: extractSlug(page.slug),
    rootElement: { id: page.rootElement.id },
    getServerSideProps: page.getServerSideProps,
    app: { id: page.app.id },
    isProvider: page.isProvider,
  })
}

@model('@codelab/Page')
export class Page
  extends ExtendedModel(ElementTreeService, {
    id: idProp,
    app: prop<IEntity>(),
    name: prop<string>().withSetter(),
    slug: prop<string>(),
    rootElement: prop<IEntity>(),
    getServerSideProps: prop<Nullish<string>>(),
    isProvider: prop<boolean>(),
  })
  implements IPage
{
  @computed
  get toJson() {
    return {
      [this.slug]: {
        id: this.id,
        name: this.name,
        slug: this.slug,
        url: `apps/${this.app.id}/pages/${this.id}`,
      },
    }
  }

  @modelAction
  writeCache(page: IPageDTO) {
    this.setName(page.name)
    this.rootElement = page.rootElement
    this.app = page.app
    this.slug = extractSlug(page.slug)
    this.getServerSideProps = page.getServerSideProps
    this.isProvider = page.isProvider

    return this
  }

  static hydrate = hydrate

  @modelAction
  override initTree(rootElement: IElement, elements: Array<IElement>) {
    super.initTree(rootElement, elements)

    this.elementTree.elementsList.forEach((e) => e.setOriginId(this.id))

    return this.elementTree
  }

  static getServerSideProps = getServerSideProps
}
