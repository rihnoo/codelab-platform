import { Nullable } from '@codelab/shared/abstract/types'
import { Field, InputType } from '@nestjs/graphql'
import { CreateTypeInput } from '../../type/create-type'

@InputType()
export class TypeRef {
  @Field(() => String, { nullable: true })
  declare existingTypeId?: Nullable<string>

  @Field(() => CreateTypeInput, { nullable: true })
  declare newType?: Nullable<CreateTypeInput>
}

@InputType()
export class CreateFieldInput {
  @Field()
  declare key: string

  @Field(() => String, { nullable: true })
  declare name?: string

  @Field(() => String, { nullable: true })
  declare description?: string

  @Field({ description: 'The interface to add fields to' })
  declare interfaceId: string

  @Field(() => TypeRef, { description: "The type of the field we're adding" })
  declare type: TypeRef
}
