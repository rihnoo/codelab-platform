import {
  domainRequest,
  Role,
  setupTestModule,
  teardownTestModule,
} from '@codelab/backend/infra'
import {
  CreateFieldGql,
  CreateFieldInput,
  CreateFieldMutation,
  GetFieldGql,
  GetFieldInput,
  GetFieldQuery,
} from '@codelab/shared/codegen/graphql'
import { INestApplication } from '@nestjs/common'
import { FieldModule } from '../../../../field.module'
import { createInterfaceType, createPrimitiveType } from './create-type-field'
import { partialCreateFieldInput } from './data'

describe('CreateField', () => {
  let guestApp: INestApplication
  let userApp: INestApplication
  let createFieldInput: CreateFieldInput

  beforeAll(async () => {
    guestApp = await setupTestModule([FieldModule], {
      role: Role.GUEST,
    })
    userApp = await setupTestModule([FieldModule], {
      role: Role.USER,
    })

    const primitiveTypeId = await createPrimitiveType(userApp)
    const interfaceTypeId = await createInterfaceType(userApp)

    createFieldInput = {
      name: partialCreateFieldInput.name!,
      key: partialCreateFieldInput.key!,
      description: partialCreateFieldInput.description,
      interfaceId: interfaceTypeId,
      type: {
        existingTypeId: primitiveTypeId,
      },
    }
  })

  afterAll(async () => {
    await teardownTestModule(guestApp)
    await teardownTestModule(userApp)
  })

  describe('Guest', () => {
    it('should not create field', async () => {
      await domainRequest<CreateFieldInput>(
        guestApp,
        CreateFieldGql,
        createFieldInput,
        { message: 'Unauthorized' },
      )
    })
  })

  describe('User', () => {
    it('should create field', async () => {
      const {
        createField: { id: fieldId },
      } = await domainRequest<CreateFieldInput, CreateFieldMutation>(
        userApp,
        CreateFieldGql,
        createFieldInput,
      )

      const { getField: field } = await domainRequest<
        GetFieldInput,
        GetFieldQuery
      >(userApp, GetFieldGql, { byId: { fieldId } })

      expect(field).toMatchObject({
        name: createFieldInput.name,
        key: createFieldInput.key,
        description: createFieldInput.description,
      })
    })
  })
})