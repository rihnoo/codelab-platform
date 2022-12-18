import type { OGM_TYPES } from '@codelab/backend/abstract/codegen'
import type { IInterfaceTypeRef } from '../type'
import type { IAuth0Id } from '../user'
import type { ComponentFragment } from './component.fragment.graphql.gen'

export interface ICreateComponentDTO {
  id: string
  name: string
  auth0Id: IAuth0Id

  // Allow for connection to existing interface
  api?: IInterfaceTypeRef | undefined

  // Allow for connection to existing element
  rootElementId?: string | undefined
}

export type IUpdateComponentDTO = Omit<
  ICreateComponentDTO,
  'id' | 'auth0Id' | 'rootElementId' | 'api'
>

export type IComponentDTO = ComponentFragment

export type IComponentExport = OGM_TYPES.Component
