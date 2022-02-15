import { z } from 'zod'
import { BaseTypeSchema } from '../base-type/base-type.interface'
import { TypeKind } from '../base-type/type-kind.enum'

export const LambdaTypeSchema = BaseTypeSchema.extend({
  typeKind: z.literal(TypeKind.LambdaType).default(TypeKind.LambdaType),
})

/**
 * Allows picking a lambda
 */
export type ILambdaType = z.infer<typeof LambdaTypeSchema>
