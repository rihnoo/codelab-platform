import {
  getDbFromTestModule,
  graphqlRequest,
  GraphqlRequestOptions,
  setupTestModule,
  teardownTestModule,
} from '@codelab/backend'
import {
  __ArrayTypeFragment,
  __EnumTypeFragment,
  __FieldFragment,
  __InterfaceTypeFragment,
  __SimpleTypeFragment,
  __TypeFragment,
  __UnitTypeFragment,
  ArrayType,
  DeleteFieldInput,
  DeleteInterfaceInput,
  GetFieldInput,
  TestCreateField,
  TestCreateFieldGql,
  TestCreateFieldMutation,
  TestCreateFieldMutationVariables,
  TestCreateInterfaceGql,
  TestCreateInterfaceMutation,
  TestCreateInterfaceMutationVariables,
  TestDeleteFieldGql,
  TestDeleteFieldMutation,
  TestDeleteFieldMutationVariables,
  TestDeleteInterfaceGql,
  TestDeleteInterfaceMutation,
  TestDeleteInterfaceMutationVariables,
  TestGetFieldGql,
  TestGetFieldQuery,
  TestGetFieldQueryVariables,
  TestGetInterfaceGql,
  TestGetInterfaceQuery,
  TestGetInterfaceQueryVariables,
  TestGetInterfacesGql,
  TestGetInterfacesQuery,
  TestGetInterfacesQueryVariables,
  TestGetTypeGql,
  TestGetTypeQuery,
  TestGetTypeQueryVariables,
  TestUpdateFieldGql,
  TestUpdateFieldMutation,
  TestUpdateFieldMutationVariables,
  TestUpdateInterfaceGql,
  TestUpdateInterfaceMutation,
  TestUpdateInterfaceMutationVariables,
  UpdateFieldInput,
  UpdateInterfaceInput,
} from '@codelab/graphql'
import { INestApplication } from '@nestjs/common'
import { PrimitiveType } from '../models'
import { TypeModule } from '../type.module'
import {
  CreateFieldInput,
  CreateInterfaceInput,
  GetInterfaceInput,
} from '../use-cases'

describe('type', () => {
  let app: INestApplication

  beforeAll(async () => {
    app = await setupTestModule(app, TypeModule)
  })

  afterAll(async () => {
    await teardownTestModule(app)
  })

  describe('Interface', () => {
    describe('Create Interface', () => {
      it('should create an interface', async () => {
        const name = 'New interface'
        const newInterface = await createInterface(name)

        expect(newInterface).toBeTruthy()
        expect(newInterface.id).toBeTruthy()
        expect(newInterface.name).toBe(name)
        expect(newInterface.fieldCollection.fields).toHaveLength(0)
        expect(newInterface.fieldCollection.types).toHaveLength(0)
      })
    })

    describe('Get Interface', () => {
      it('should get interface without fields', async () => {
        const name = 'New interface'
        const newInterface = await createInterface(name)
        const retrievedInterface = await getInterface(newInterface.id)

        expect(retrievedInterface).toBeTruthy()
        expect(retrievedInterface?.name).toBe(name)
        expect(newInterface.fieldCollection.fields).toHaveLength(0)
        expect(newInterface.fieldCollection.types).toHaveLength(0)
      })

      it('should get interface with fields', async () => {
        const name = 'New interface'
        const newInterface = await createInterface(name)

        const field1 = await createField({
          name: 'Field',
          type: { simpleType: { primitiveType: PrimitiveType.String } },
          interfaceId: newInterface.id,
          key: 'field1',
        })

        const field2 = await createField({
          name: 'Field 2',
          type: {
            arrayType: {
              type: { simpleType: { primitiveType: PrimitiveType.Boolean } },
            },
          },
          interfaceId: newInterface.id,
          key: 'field2',
        })

        const retrievedInterface = await getInterface(newInterface.id)

        expect(retrievedInterface).toBeTruthy()
        expect(retrievedInterface?.name).toBe(name)

        expect(retrievedInterface?.fieldCollection.fields).toHaveLength(2)
        // We should have 3 types: 1. field1's SimpleType 2. field2's ArrayType 3. field2's generic SimpleType
        expect(retrievedInterface?.fieldCollection.types).toHaveLength(3)

        let foundField1Type = false
        let foundField2Type = false
        let field2GenericTypeId: string | null = null

        retrievedInterface?.fieldCollection.types.forEach((type) => {
          if ((type as any).id === field1.typeId) {
            foundField1Type = true
          } else if ((type as any).id === field2.typeId) {
            foundField2Type = true
            field2GenericTypeId = (type as ArrayType).typeId
          }
        })

        expect(foundField1Type).toBeTruthy()
        expect(foundField2Type).toBeTruthy()
        expect(field2GenericTypeId).toBeTruthy()

        const foundField2GenericType =
          retrievedInterface?.fieldCollection.types.find(
            (type) => (type as any).id === field2GenericTypeId,
          )

        expect(foundField2GenericType).toBeTruthy()
      })

      it('should get interfaces', async () => {
        getDbFromTestModule(app).resetDb()

        await createInterface()
        await createInterface()

        const interfaces = await getInterfaces()

        expect(interfaces).toHaveLength(2)
      })
    })

    describe('Update interface', () => {
      it('should update interface', async () => {
        const firstName = 'Old interface'
        const newName = 'New interface'
        const newInterface = await createInterface(firstName)

        const updatedInterface = await updateInterface({
          interfaceId: newInterface.id,
          updateData: { name: newName },
        })

        expect(updatedInterface.name).toBe(newName)

        const retrievedInterface = await getInterface(newInterface.id)

        expect(retrievedInterface?.name).toBe(newName)
      })
    })

    describe('Delete interface', () => {
      it('should delete interface and all its fields', async () => {
        const newInterface = await createInterface()

        const { affected } = await deleteInterface({
          interfaceId: newInterface.id,
        })

        expect(affected).toBe(1)

        const retrievedInterface = await getInterface(newInterface.id)

        expect(retrievedInterface).toBeFalsy()
      })
    })
  })

  describe('Field', () => {
    let interfaceId: string

    beforeAll(async () => {
      interfaceId = (await createInterface()).id
    })

    describe('Create field', () => {
      it('should create simple type field', async () => {
        //Loop all primitive types and create a simple type for each of them
        for (const primitiveType of Object.values(PrimitiveType)) {
          const input: CreateFieldInput = {
            name: `A ${primitiveType} field`,
            interfaceId,
            key: `fieldKey${primitiveType}`,
            type: {
              simpleType: {
                primitiveType,
              },
            },
          }

          // assert the field matches the input
          const field = await createField(input)
          checkField(field, input)

          // assert the type matches too
          const type = await getType(field.typeId)
          checkSimpleType(type, primitiveType)
        }
      })

      it('should create array type field with simple type array item', async () => {
        const primitiveType = PrimitiveType.String

        const input: CreateFieldInput = {
          type: {
            arrayType: {
              type: { simpleType: { primitiveType } },
            },
          },
          name: 'String Array',
          key: 'stringArray',
          description: 'This is a string array',
          interfaceId,
        }

        const field = await createField(input)
        checkField(field, input)

        const type = await getType(field.typeId)

        expect(type).toBeTruthy()
        expect(type?.__typename).toBe('ArrayType')

        const simpleType = await getType((type as __ArrayTypeFragment).typeId)

        checkSimpleType(simpleType, primitiveType)
      })

      it('should create enum type field', async () => {
        const allowedValues = ['block', 'inline', 'flex', 'grid']

        const input: CreateFieldInput = {
          name: 'Display',
          key: 'display',
          interfaceId,
          type: {
            enumType: {
              allowedValues,
            },
          },
        }

        const field = await createField(input)
        checkField(field, input)

        const type = await getType(field.typeId)

        expect(type?.__typename).toBe('EnumType')

        // tldr: check that all returned allowedValues exist in input allowedValues
        // and that the array length matches
        expect(
          (type as __EnumTypeFragment).allowedValues.filter((allowedValue) =>
            allowedValues.find((v) => v === allowedValue.name),
          ).length === allowedValues.length,
        )
      })

      it('should create interface type field', async () => {
        const interface2 = await createInterface()

        const input: CreateFieldInput = {
          name: 'Interface field',
          key: 'anInterface',
          interfaceId,
          type: {
            interfaceType: {
              interfaceId: interface2.id,
            },
          },
        }

        const field = await createField(input)
        checkField(field, input)

        const type = await getType(field.typeId)

        expect(type?.__typename).toBe('InterfaceType')
        expect((type as __InterfaceTypeFragment).interfaceId).toBe(
          interface2.id,
        )
      })

      it('should create unit type field', async () => {
        const input: CreateFieldInput = {
          name: 'Unit type field',
          key: 'unitType',
          interfaceId,
          type: {
            unitType: {
              allowedUnits: null,
            },
          },
        }

        const field = await createField(input)
        checkField(field, input)

        const type = await getType(field.typeId)

        expect(type?.__typename).toBe('UnitType')
        expect((type as __UnitTypeFragment).allowedUnits).toBeTruthy()
        expect((type as __UnitTypeFragment).allowedUnits.length).toBeTruthy()
      })

      it('should fail to create a field with duplicate key', async () => {
        const input: CreateFieldInput = {
          name: `A simple field`,
          interfaceId,
          key: 'duplicatedFieldKey',
          type: {
            simpleType: {
              primitiveType: PrimitiveType.String,
            },
          },
        }

        await createField(input)

        const response = await graphqlRequest<TestCreateFieldMutationVariables>(
          app,
          TestCreateField,
          { input },
          { expectNoErrors: false },
        )

        expect(response.body.errors[0].message).toContain(input.key)
      })
    })

    describe('Get field', () => {
      let fieldId: string

      const createFieldInput: Omit<CreateFieldInput, 'interfaceId'> = {
        name: `A simple field`,
        key: 'fieldKey',
        type: {
          simpleType: {
            primitiveType: PrimitiveType.String,
          },
        },
      }

      beforeAll(async () => {
        const field = await createField({ ...createFieldInput, interfaceId })
        fieldId = field.id
      })

      it('Gets field by id', async () => {
        const field = await getField({ byId: { fieldId } })
        checkField(field, createFieldInput)

        expect(field?.id).toBe(fieldId)
      })

      it('Gets field by interface and key', async () => {
        const field = await getField({
          byInterface: { interfaceId, fieldKey: createFieldInput.key },
        })

        checkField(field, createFieldInput)

        expect(field?.id).toBe(fieldId)
      })
    })

    describe('Update field', () => {
      it('should update field', async () => {
        const field = await createField({
          name: 'field',
          key: 'updateMe',
          interfaceId,
          type: { simpleType: { primitiveType: PrimitiveType.String } },
          description: 'hello',
        })

        const updateInput = {
          updateData: {
            name: 'new name',
            key: 'updateMe',
            interfaceId,
            description: 'hello 2',
            type: {
              arrayType: {
                type: { simpleType: { primitiveType: PrimitiveType.String } },
              },
            },
          },
          fieldId: field.id,
        }

        const updatedField = await updateField(updateInput)
        checkField(updatedField, updateInput.updateData)

        const retrievedField = await getField({ byId: { fieldId: field.id } })
        checkField(retrievedField, updateInput.updateData)
      })

      it('should not update field with existing key', async () => {
        const duplicateFieldKey = 'notThisOne'

        const field = await createField({
          name: 'field',
          key: 'aLegitKey',
          interfaceId,
          type: { simpleType: { primitiveType: PrimitiveType.String } },
          description: 'hello',
        })

        await createField({
          name: 'field',
          key: duplicateFieldKey,
          interfaceId,
          type: { simpleType: { primitiveType: PrimitiveType.String } },
          description: 'hello',
        })

        const updateInput = {
          updateData: {
            name: 'new name',
            key: duplicateFieldKey,
            interfaceId,
            description: 'hello 2',
            type: {
              arrayType: {
                type: { simpleType: { primitiveType: PrimitiveType.String } },
              },
            },
          },
          fieldId: field.id,
        }

        const response = await graphqlRequest<TestUpdateFieldMutationVariables>(
          app,
          TestUpdateFieldGql,
          { input: updateInput },
          { expectNoErrors: false },
        )

        expect(response.body.errors[0].message).toContain(duplicateFieldKey)
      })
    })

    describe('Delete field', () => {
      it('should delete field', async () => {
        const field = await createField({
          name: 'asd',
          type: { simpleType: { primitiveType: PrimitiveType.String } },
          key: 'deleteMe',
          interfaceId,
        })

        const { affected } = await deleteField({ fieldId: field.id })

        expect(affected).toBe(1)

        const retrieved = await getField({ byId: { fieldId: field.id } })

        expect(retrieved).toBeFalsy()
      })
    })
  })

  //
  // Helper functions
  //

  const createInterface = async (name = 'Test props') => {
    const input: CreateInterfaceInput = {
      name,
    }

    const response = await graphqlRequest<TestCreateInterfaceMutationVariables>(
      app,
      TestCreateInterfaceGql,
      { input },
    )

    return (response.body.data as TestCreateInterfaceMutation).createInterface
  }

  const updateInterface = async (input: UpdateInterfaceInput) => {
    const response = await graphqlRequest<TestUpdateInterfaceMutationVariables>(
      app,
      TestUpdateInterfaceGql,
      { input },
    )

    return (response.body.data as TestUpdateInterfaceMutation).updateInterface
  }

  const deleteInterface = async (input: DeleteInterfaceInput) => {
    const response = await graphqlRequest<TestDeleteInterfaceMutationVariables>(
      app,
      TestDeleteInterfaceGql,
      { input },
    )

    return (response.body.data as TestDeleteInterfaceMutation).deleteInterface
  }

  const getInterface = async (interfaceId: string) => {
    const input: GetInterfaceInput = {
      interfaceId,
    }

    const response = await graphqlRequest<TestGetInterfaceQueryVariables>(
      app,
      TestGetInterfaceGql,
      { input },
    )

    return (response.body.data as TestGetInterfaceQuery).getInterface
  }

  const getInterfaces = async () => {
    const response = await graphqlRequest<TestGetInterfacesQueryVariables>(
      app,
      TestGetInterfacesGql,
      {},
    )

    return (response.body.data as TestGetInterfacesQuery).getInterfaces
  }

  const createField = async (
    input: CreateFieldInput,
    options?: GraphqlRequestOptions,
  ) => {
    const response = await graphqlRequest<TestCreateFieldMutationVariables>(
      app,
      TestCreateFieldGql,
      { input },
      options,
    )

    return (response.body.data as TestCreateFieldMutation).createField
  }

  const updateField = async (input: UpdateFieldInput) => {
    const response = await graphqlRequest<TestUpdateFieldMutationVariables>(
      app,
      TestUpdateFieldGql,
      { input },
    )

    return (response.body.data as TestUpdateFieldMutation).updateField
  }

  const deleteField = async (input: DeleteFieldInput) => {
    const response = await graphqlRequest<TestDeleteFieldMutationVariables>(
      app,
      TestDeleteFieldGql,
      { input },
    )

    return (response.body.data as TestDeleteFieldMutation).deleteField
  }

  const getField = async (input: GetFieldInput) => {
    const response = await graphqlRequest<TestGetFieldQueryVariables>(
      app,
      TestGetFieldGql,
      { input },
    )

    return (response.body.data as TestGetFieldQuery).getField
  }

  const getType = async (typeId: string) => {
    const response = await graphqlRequest<TestGetTypeQueryVariables>(
      app,
      TestGetTypeGql,
      { input: { typeId } },
    )

    return (response.body.data as TestGetTypeQuery).getType
  }

  const checkField = (
    field: __FieldFragment | undefined | null,
    input: Omit<CreateFieldInput, 'interfaceId'>,
  ) => {
    expect(field).toBeTruthy()
    expect(field?.id).toBeTruthy()
    expect(field?.name).toBe(input.name)
    expect(field?.key).toBe(input.key)
    expect(
      input.description ? field?.description === input.description : true,
    ).toBeTruthy()
    expect(field?.typeId).toBeTruthy()
  }

  const checkSimpleType = (
    type: __TypeFragment | undefined | null,
    primitiveType: any,
  ) => {
    expect(type).toBeTruthy()
    expect(type?.__typename).toBe('SimpleType')
    expect((type as __SimpleTypeFragment).primitiveType).toBe(primitiveType)
  }
})