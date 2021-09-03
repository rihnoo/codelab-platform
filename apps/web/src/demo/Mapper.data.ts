import { Graph } from '@codelab/shared/abstract/core'
import {
  ComponentFragment,
  ElementEdgeFragment,
  ElementFragment,
} from '@codelab/shared/codegen/graphql'

/**
 * We first build a page using the web builder, then we copy the data for the renderer.
 */
export const mapperPageElements = {
  __typename: 'ElementGraph',
  edges: [
    {
      order: 1,
      source: '0x249f2',
      target: '0x249f3',
    },
    {
      order: 1,
      source: '0x249f3',
      target: '0x249f5',
    },
  ],
  vertices: [
    {
      __typename: 'Element',
      atom: null,
      css: null,
      id: '0x249f2',
      name: 'Root element',
      props: '{}',
    },
    {
      __typename: 'Element',
      atom: {
        __typename: 'Atom',
        id: '0x160fb',
        name: 'Button',
        type: 'AntDesignButton',
        api: {
          __typename: 'InterfaceType',
          id: '0x160fc',
          name: 'Button API',
        },
      },
      css: null,
      id: '0x249f3',
      name: 'Button',
      props: '{ "type": "primary" }',
    },
    {
      __typename: 'Element',
      atom: {
        __typename: 'Atom',
        id: '0x16075',
        name: 'Text',
        type: 'Text',
        api: {
          __typename: 'InterfaceType',
          id: '0x16076',
          name: 'Button API',
        },
      },
      css: null,
      id: '0x249f5',
      name: 'Text',
      props: '{ "text": "Click Me!" }',
    },
  ],
} as Graph<ComponentFragment | ElementFragment, ElementEdgeFragment>
