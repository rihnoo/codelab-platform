import { Edge, Graph, Vertex } from '@codelab/shared/abstract/core'
import { Injectable } from '@nestjs/common'
import { Core, EdgeDataDefinition, NodeDataDefinition } from 'cytoscape'

@Injectable()
export class CytoscapeService {
  /**
   * We're using elements in the cytoscape sense, not our domain sense.
   */
  // fromElements({ nodes, edges }: CytoscapeGraph) {
  //   return cytoscape({
  //     headless: true,
  //     elements: {
  //       nodes: nodes.map((node) => ({
  //         data: {
  //           ...node,
  //         },
  //       })),
  //       edges: edges.map((edge) => ({
  //         data: {
  //           ...edge,
  //         },
  //       })),
  //     },
  //   })
  // }

  treeToGraph<TVertex extends Vertex, TEdge extends Edge>(
    cy: Core,
    vertexMapper: (nodeData: any) => TVertex,
    edgeMapper: (edgeData: any) => TEdge,
  ): Graph<TVertex, TEdge> {
    return {
      vertices: cy.nodes().map((node) => vertexMapper(node.data())),
      edges: cy.edges().map((edge) => edgeMapper(edge.data())),
    }
  }
}

export interface CytoscapeGraph {
  nodes: Array<NodeDataDefinition>
  edges: Array<EdgeDataDefinition>
}