import type {
  IActionService,
  IResourceService,
  IUpdateActionDTO,
} from '@codelab/frontend/abstract/core'
import { SelectAction, SelectResource } from '@codelab/frontend/domain/type'
import { createNotificationHandler } from '@codelab/frontend/shared/utils'
import { DisplayIfField, ModalForm } from '@codelab/frontend/view/components'
import { IActionKind, IResourceType } from '@codelab/shared/abstract/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import type { Context } from 'uniforms'
import { AutoField, AutoFields } from 'uniforms-antd'
import { updateActionSchema } from './updateActionSchema'

export const UpdateActionModal = observer<{
  actionService: IActionService
  resourceService: IResourceService
}>(({ actionService, resourceService }) => {
  const closeModal = () => actionService.updateModal.close()
  const updateAction = actionService.updateModal.action

  const onSubmit = (data: IUpdateActionDTO) => {
    if (!updateAction) {
      throw new Error('Updated action is not set')
    }

    return actionService.update(updateAction, data)
  }

  const onSubmitError = createNotificationHandler({
    title: 'Error while updating action',
  })

  const model = {
    storeId: updateAction?.store.current.id,
    name: updateAction?.name,
    type: updateAction?.type,
    id: updateAction?.id,

    config:
      updateAction?.type === IActionKind.ApiAction
        ? updateAction.config.values
        : undefined,
    resourceId:
      updateAction?.type === IActionKind.ApiAction
        ? updateAction.resource.id
        : undefined,
    successActionId:
      updateAction?.type === IActionKind.ApiAction
        ? updateAction.successAction?.id
        : undefined,
    errorActionId:
      updateAction?.type === IActionKind.ApiAction
        ? updateAction.errorAction?.id
        : undefined,

    code:
      updateAction?.type === IActionKind.CodeAction
        ? updateAction.code
        : undefined,
  }

  const getResourceType = (context: Context<IUpdateActionDTO>) =>
    context.model.resourceId
      ? resourceService.resource(context.model.resourceId)?.type
      : null

  const getResourceApiUrl = (context: Context<IUpdateActionDTO>) =>
    context.model.resourceId
      ? resourceService.resource(context.model.resourceId)?.config.get('url')
      : null

  return (
    <ModalForm.Modal
      okText="Update Action"
      onCancel={closeModal}
      open={actionService.updateModal.isOpen}
    >
      <ModalForm.Form<IUpdateActionDTO>
        model={model}
        onSubmit={onSubmit}
        onSubmitError={onSubmitError}
        onSubmitSuccess={closeModal}
        schema={updateActionSchema}
      >
        <AutoFields
          omitFields={[
            'code',
            'resourceId',
            'config',
            'successActionId',
            'errorActionId',
            'actionsIds',
          ]}
        />

        {/** Code Action */}
        <DisplayIfField<IUpdateActionDTO>
          condition={(context) => context.model.type === IActionKind.CodeAction}
        >
          <AutoField label="Action code" name="code" />
        </DisplayIfField>

        {/** Api Action */}
        <DisplayIfField<IUpdateActionDTO>
          condition={(context) => context.model.type === IActionKind.ApiAction}
        >
          <SelectResource name="resourceId" resourceService={resourceService} />
          <AutoField component={SelectAction} name="successActionId" />
          <AutoField component={SelectAction} name="errorActionId" />

          {/** GraphQL Config Form */}
          <DisplayIfField<IUpdateActionDTO>
            condition={(context) =>
              getResourceType(context) === IResourceType.GraphQL
            }
          >
            <AutoField getUrl={getResourceApiUrl} name="config.query" />
            <AutoField name="config.variables" />
            <AutoField name="config.headers" />
          </DisplayIfField>

          {/** Rest Config Form */}
          <DisplayIfField<IUpdateActionDTO>
            condition={(context) =>
              getResourceType(context) === IResourceType.Rest
            }
          >
            <AutoField name="config.urlSegment" />
            <AutoField name="config.method" />
            <AutoField name="config.body" />
            <AutoField name="config.queryParams" />
            <AutoField name="config.headers" />
            <AutoField name="config.responseType" />
          </DisplayIfField>
        </DisplayIfField>
      </ModalForm.Form>
    </ModalForm.Modal>
  )
})
