import { IAppType } from './app-type'
import { IArrayType } from './array-type'
import { ITypeKind } from './base-type'
import { IElementType } from './element-type'
import { IEnumType } from './enum-type'
import { IInterfaceType } from './interface-type'
import { ILambdaType } from './lambda-type'
import { IMonacoType } from './monaco-type'
import { IPageType } from './page-type'
import { IPrimitiveType } from './primitive-type'
import { IReactNodeType } from './react-node-type'
import { IRenderPropsType } from './render-props-type'
import type { IUnionType } from './union-type'

export type IAnyType =
  | IArrayType
  | IElementType
  | IEnumType
  | IInterfaceType
  | ILambdaType
  | IPageType
  | IAppType
  | IPrimitiveType
  | IRenderPropsType
  | IReactNodeType
  | IUnionType
  | IMonacoType

export type ITypeRef = string

export type ITypeOf<TKind extends ITypeKind> = IAnyType extends {
  typeKind: TKind
}
  ? IAnyType
  : never