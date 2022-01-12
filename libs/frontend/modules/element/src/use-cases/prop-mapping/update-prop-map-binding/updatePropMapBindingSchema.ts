import { JSONSchemaType } from 'ajv'
import { UpdatePropMapBindingMutationVariables } from '../../../graphql/prop-map-binding.endpoints.graphql.gen'

export type UpdatePropMapBindingSchema =
  UpdatePropMapBindingMutationVariables['input']['data']

export const updatePropMapBindingSchema: JSONSchemaType<UpdatePropMapBindingSchema> =
  {
    title: 'Update Prop Map Binding Input',
    type: 'object',
    properties: {
      sourceKey: {
        autoFocus: true,
        type: 'string',
      },
      targetElementId: {
        type: 'string',
        nullable: true,
        label: 'Target Element',
      },
      targetKey: {
        type: 'string',
      },
    },
    required: ['sourceKey', 'targetKey'],
  }