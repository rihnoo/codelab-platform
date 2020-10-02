import { NodeFactory } from './node-factory'
import { CreateFormStrategy } from './node-mapper'
import { NodeRepository } from './node-repository'
import { IsValidCreateDtoModel } from './node-specification'
import { Validator } from './validator'
import { NodeI } from '@codelab/shared/interface/node'

/**
 * Our application layer interacts with our domain objects via services Although they include CRUD methods, they can include domain language specific methods like `move` node or `swap` node.
 */
export class NodeService {
  validator

  factory

  repository

  constructor() {
    this.validator = new Validator()
    this.factory = new NodeFactory()
    this.repository = new NodeRepository(this.factory)
  }

  createModel(data: NodeI) {
    this.validator.addRule(new IsValidCreateDtoModel()).validate(data)

    this.factory.setData(data)
    this.factory.setStrategy(new CreateFormStrategy())

    return this.repository.save()
  }

  // updateModel() {}

  // editModel() {}
}