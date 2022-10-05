import { Form, handleFormSubmit } from '@codelab/frontend/view/components'
import { JSONSchemaType } from 'ajv'
import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'
import { mergeDeepRight } from 'ramda'
import React, { useEffect, useRef, useState } from 'react'
import { TypeSchemaFactory } from '../store'
import { InterfaceFormProps } from './types'
import { getUiProperties } from './ui-properties'

const transformer = new TypeSchemaFactory({
  extraProperties: getUiProperties,
})

/**
 * Uniforms form generated by an {@link IInterfaceType}
 */
export const InterfaceForm = observer(
  <TData, TResponse = unknown>({
    interfaceType,
    children,
    model,
    onSubmit,
    initialSchema,
    onChange,
    onSubmitError,
    onSubmitSuccess,
    submitRef,
    setIsLoading,
    autosave,
    context,
    submitField,
  }: React.PropsWithChildren<InterfaceFormProps<TData, TResponse>>) => {
    const initialSchemaRef = useRef(initialSchema)
    const [formSchema, setFormSchema] = useState(initialSchema ?? {})

    useEffect(
      () =>
        autorun(() => {
          const typeTreeSchema = transformer.transform(interfaceType, context)
          setFormSchema(
            mergeDeepRight(initialSchemaRef?.current ?? {}, typeTreeSchema),
          )
        }),
      [interfaceType],
    )

    if (!formSchema) {
      return null
    }

    return (
      <Form
        autosave={autosave}
        model={model}
        onChange={onChange}
        onSubmit={handleFormSubmit<TData, TResponse>(
          onSubmit,
          setIsLoading,
          onSubmitSuccess,
          onSubmitError,
        )}
        onSubmitError={onSubmitError}
        onSubmitSuccess={onSubmitSuccess}
        schema={formSchema as JSONSchemaType<unknown>}
        submitField={submitField}
        submitRef={submitRef}
      >
        {children}
      </Form>
    )
  },
)

InterfaceForm.displayName = 'InterfaceForm'