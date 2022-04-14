import {
  IAppType,
  IAppTypeDTO,
  ITypeDTO,
  IUpdateTypeDTO,
  TypeKind,
} from '@codelab/shared/abstract/core'
import { ExtendedModel, model, modelAction } from 'mobx-keystone'
import { updateFromDTO } from '../abstract'
import { createTypeBase } from './base-type.model'

const hydrate = ({ id, typeKind, name, owner }: IAppTypeDTO): AppType => {
  return new AppType({ id, typeKind, name, ownerAuth0Id: owner?.auth0Id })
}

@model('@codelab/AppType')
export class AppType
  extends ExtendedModel(() => ({
    baseModel: createTypeBase(TypeKind.AppType),
    props: {},
  }))
  implements IAppType
{
  @modelAction
  updateCache(fragment: ITypeDTO): void {
    updateFromDTO(this, fragment)
  }

  @modelAction
  override applyUpdateData(input: IUpdateTypeDTO) {
    super.applyUpdateData(input)
  }

  public static hydrate = hydrate
}
