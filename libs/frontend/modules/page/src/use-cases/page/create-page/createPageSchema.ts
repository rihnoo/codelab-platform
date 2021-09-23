import { JSONSchemaType } from 'ajv'
import { CreatePageMutationVariables } from './CreatePage.web.graphql.gen'

export type CreatePageSchemaType = Omit<
  CreatePageMutationVariables['input'],
  'appId'
>

export const createPageSchema: JSONSchemaType<CreatePageSchemaType> = {
  title: 'Create Page Input',
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
  },
  required: ['name'],
} as const
