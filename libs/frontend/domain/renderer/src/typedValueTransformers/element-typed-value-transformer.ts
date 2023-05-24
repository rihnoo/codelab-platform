import type { TypedValue } from '@codelab/frontend/abstract/core'
import { ITypeKind } from '@codelab/shared/abstract/core'
import { ExtendedModel, model } from 'mobx-keystone'
import type { ITypedValueTransformer } from '../abstract/i-typed-value-transformer'
import { BaseRenderPipe } from '../renderPipes/render-pipe.base'

/**
 * Transforms props from the following format:
 * {
 *   [$propName]: {
 *     type: '<id of a type with kind ElementType>',
 *     value: '$elementId'
 *   }
 * }
 *
 * into:
 * {
 *   [$propName]: <ReactNode - Rendered element from the same tree with id - $elementId>
 * }
 */
@model('@codelab/ElementTypedValueTransformer')
export class ElementTypedValueTransformer
  extends ExtendedModel(BaseRenderPipe, {})
  implements ITypedValueTransformer
{
  canHandleTypeKind(kind: ITypeKind): boolean {
    return kind === ITypeKind.ElementType
  }

  canHandleValue(value: TypedValue<unknown>): boolean {
    return (
      typeof value.value === 'string' &&
      Boolean(this.renderer.elementTree.current.element(value.value))
    )
  }

  public transform(props: TypedValue<unknown>) {
    const elementId = props.value

    if (typeof elementId !== 'string') {
      return props
    }

    const element = this.renderer.elementTree.current.element(elementId)

    if (!element) {
      // this shouldn't happen, we check in canHandleValue
      return props
    }

    return this.renderer.renderElement(element)
  }
}