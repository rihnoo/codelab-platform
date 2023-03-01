import type {
  ICreatePrimitiveType,
  IPrimitiveType,
  IUserRef,
} from '@codelab/backend/abstract/core'
import type { IPrimitiveTypeKind } from '@codelab/shared/abstract/core'
import { ITypeKind } from '@codelab/shared/abstract/core'
import { v4 } from 'uuid'
import { BaseType } from './base-type.model'

export class PrimitiveType extends BaseType implements IPrimitiveType {
  declare id: string

  declare name: string

  declare kind: ITypeKind.PrimitiveType

  declare __typename: `${ITypeKind.PrimitiveType}`

  declare owner: IUserRef

  primitiveKind: IPrimitiveTypeKind

  private constructor({
    id,
    name,
    kind,
    primitiveKind,
    owner,
  }: IPrimitiveType) {
    super({ id, name, kind, __typename: ITypeKind.PrimitiveType, owner })
    this.primitiveKind = primitiveKind
  }

  static init({ owner, primitiveKind }: ICreatePrimitiveType) {
    return new PrimitiveType({
      __typename: ITypeKind.PrimitiveType,
      id: v4(),
      name: primitiveKind,
      kind: ITypeKind.PrimitiveType,
      owner,
      primitiveKind,
    })
  }
}