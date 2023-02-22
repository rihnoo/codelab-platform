import type {
  IActionType,
  ICreateActionType,
} from '@codelab/backend/abstract/core'
import { ITypeFactory } from '@codelab/backend/abstract/core'
import { ITypeKind } from '@codelab/shared/abstract/core'
import type { BaseTypeUniqueWhereCallback } from '@codelab/shared/abstract/types'
import { ActionType } from '../model/action-type.model'
import { ActionTypeRepository } from '../repository/action-type.repo'

export class ActionTypeFactory extends ITypeFactory<
  ICreateActionType,
  IActionType
> {
  repository: ActionTypeRepository = new ActionTypeRepository()

  async _create(
    { owner }: ICreateActionType,
    where: BaseTypeUniqueWhereCallback<IActionType>,
  ) {
    const actionType = ActionType.init({
      owner,
      __typename: ITypeKind.ActionType,
    })

    return await this.repository.save(actionType, where(actionType))
  }
}
