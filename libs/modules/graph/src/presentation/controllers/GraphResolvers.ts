import { Inject, Injectable } from '@nestjs/common'
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { GraphQLJSONObject } from 'graphql-type-json'
import { AddChildVertexInput } from '../../core/application/useCases/addChildVertex/AddChildVertexInput'
import { AddChildVertexService } from '../../core/application/useCases/addChildVertex/AddChildVertexService'
import { CreateGraphInput } from '../../core/application/useCases/createGraph/CreateGraphInput'
import { CreateGraphService } from '../../core/application/useCases/createGraph/CreateGraphService'
import { GetGraphInput } from '../../core/application/useCases/getGraph/GetGraphInput'
import { GetGraphService } from '../../core/application/useCases/getGraph/GetGraphService'
import { GetTreeService } from '../../core/application/useCases/getTree/GetTreeService'
import { Edge } from '../../core/domain/edge/Edge'
import { Graph } from '../../core/domain/graph/Graph'
import { Vertex } from '../../core/domain/vertex/Vertex'
import { PrismaDITokens, PrismaService } from '@codelab/backend'

@Resolver(() => Graph)
@Injectable()
export class GraphResolvers {
  constructor(
    @Inject(PrismaDITokens.PrismaService)
    private readonly prismaService: PrismaService,
    private readonly createGraphService: CreateGraphService,
    private readonly addChildVertexService: AddChildVertexService,
    private readonly getGraphService: GetGraphService,
    private readonly getTreeService: GetTreeService,
  ) {}

  @Mutation(() => Graph)
  createGraph(@Args('input') input: CreateGraphInput) {
    return this.createGraphService.execute(input)
  }

  @Mutation(() => Vertex)
  addChildVertex(@Args('input') input: AddChildVertexInput) {
    return this.addChildVertexService.execute(input)
  }

  @Query(() => Graph)
  getGraph(@Args('input') input: GetGraphInput) {
    return this.getGraphService.execute(input)
  }

  @ResolveField('vertices', (returns) => [Vertex])
  vertices(@Parent() graph: Graph) {
    return this.prismaService.vertex.findMany({
      where: {
        graphId: graph.id,
      },
    })
  }

  @ResolveField('edges', (returns) => [Edge])
  edges(@Parent() graph: Graph) {
    return this.prismaService.edge.findMany({
      where: {
        graphId: graph.id,
      },
    })
  }

  /**
   * @deprecated Fetch graph then parse on frontend using cy
   */
  @ResolveField('tree', (returns) => GraphQLJSONObject)
  tree(@Parent() graph: Graph) {
    return this.getTreeService.execute({ graphId: graph.id })
  }
}