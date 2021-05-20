import { EditorProvider } from '@codelab/frontend/builder'
import { ComponentProvider, LibraryProvider } from '@codelab/frontend/shared'
import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'
import { WithMainPane } from './Layout.d'
import { LayoutBuilder } from './Layout--builder'

export const LayoutLibrary = (props: PropsWithChildren<WithMainPane>) => {
  const { children, MainPane } = props
  const { query } = useRouter()
  const componentId = query?.componentId as string

  return (
    <LibraryProvider>
      <ComponentProvider componentId={componentId}>
        <EditorProvider>
          <LayoutBuilder MainPane={MainPane}>{children}</LayoutBuilder>
        </EditorProvider>
      </ComponentProvider>
    </LibraryProvider>
  )
}