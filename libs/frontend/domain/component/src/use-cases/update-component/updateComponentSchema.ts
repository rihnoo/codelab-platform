import { IUpdateComponentDTO } from '@codelab/frontend/abstract/core'
import { JSONSchemaType } from 'ajv'

export const updateComponentSchema: JSONSchemaType<IUpdateComponentDTO> = {
  title: 'Create Component Input',
  type: 'object',
  properties: {
    name: {
      autoFocus: true,
      type: 'string',
    },
  },
  required: ['name'],
}
