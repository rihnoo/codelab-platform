import { JSONSchemaType } from 'ajv'
import { HiddenField } from 'uniforms-antd'
import { CreatePropMapBindingMutationVariables } from '../../../graphql/prop-map-binding.endpoints.graphql.gen'

export type CreatePropMapBindingSchema =
  CreatePropMapBindingMutationVariables['input']

export const createPropMapBindingSchema: JSONSchemaType<CreatePropMapBindingSchema> =
  {
    title: 'Create Prop Map Binding Input',
    type: 'object',
    properties: {
      elementId: {
        type: 'string',
        component: HiddenField,
      },
      sourceKey: {
        autoFocus: true,
        type: 'string',
      },
      targetElementId: {
        type: 'string',
        nullable: true,
        label: 'Target Element',
        help: 'Leave blank to target the current element',
      },
      targetKey: {
        type: 'string',
      },
    },
    required: ['elementId', 'sourceKey', 'targetKey'],
  }