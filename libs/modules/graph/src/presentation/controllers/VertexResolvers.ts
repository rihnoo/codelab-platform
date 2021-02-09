import { Inject, Injectable } from '@nestjs/common'
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { VertexService } from '../../core/application/services/VertexService'
import { DeleteVertexInput } from '../../core/application/useCases/deleteVertex/DeleteVertexInput'
import { DeleteVertexService } from '../../core/application/useCases/deleteVertex/DeleteVertexService'
import { GetVertexInput } from '../../core/application/useCases/getVertex/GetVertexInput'
import { GetVertexService } from '../../core/application/useCases/getVertex/GetVertexService'
import { MoveVertexInput } from '../../core/application/useCases/moveVertex/MoveVertexInput'
import { MoveVertexService } from '../../core/application/useCases/moveVertex/MoveVertexService'
import { UpdateVertexInput } from '../../core/application/useCases/updateVertex/UpdateVertexInput'
import { UpdateVertexService } from '../../core/application/useCases/updateVertex/UpdateVertexService'
import { Graph } from '../../core/domain/graph/Graph'
import { Vertex } from '../../core/domain/vertex/Vertex'
import { PrismaDITokens, PrismaService } from '@codelab/backend'

@Resolver(() => Vertex)
@Injectable()
export class VertexResolvers {
  constructor(
    @Inject(PrismaDITokens.PrismaService)
    private readonly prismaService: PrismaService,
    private readonly vertexService: VertexService,
    private readonly deleteVertexService: DeleteVertexService,
    private readonly getVertexService: GetVertexService,
    private readonly updateVertexService: UpdateVertexService,
    private readonly moveVertexService: MoveVertexService,
  ) {}

  @ResolveField('parent', (returns) => Vertex, { nullable: true })
  parent(@Parent() vertex: Vertex) {
    return this.vertexService.parent(vertex.id)
  }

  @Mutation(() => Vertex)
  moveVertex(@Args('input') input: MoveVertexInput) {
    return this.moveVertexService.execute(input)
  }

  @Mutation(() => Vertex)
  updateVertex(@Args('input') input: UpdateVertexInput) {
    return this.updateVertexService.execute(input)
  }

  @Mutation(() => Vertex)
  deleteVertex(@Args('input') input: DeleteVertexInput) {
    return this.deleteVertexService.execute(input)
  }

  @ResolveField('children', (returns) => [Vertex])
  children(@Parent() vertex: Vertex) {
    return this.vertexService.children(vertex.id)
  }

  @ResolveField('graph', () => Graph)
  graph(@Parent() vertex: Vertex) {
    return this.prismaService.graph.findFirst({
      where: {
        vertices: {
          some: {
            id: vertex.id,
          },
        },
      },
    })
  }

  @Query(() => Vertex, { nullable: true })
  getVertex(@Args('input') input: GetVertexInput) {
    return this.getVertexService.execute(input)
  }
}