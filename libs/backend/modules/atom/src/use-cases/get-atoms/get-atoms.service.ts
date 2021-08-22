import {
  DgraphAtom,
  DgraphEntityType,
  DgraphQueryBuilder,
  DgraphUseCase,
} from '@codelab/backend/infra'
import { Injectable } from '@nestjs/common'
import { Txn } from 'dgraph-js-http'
import { GetAtomsInput } from './get-atoms.input'

@Injectable()
export class GetAtomsService extends DgraphUseCase<
  GetAtomsInput,
  Array<DgraphAtom>
> {
  protected executeTransaction(request: GetAtomsInput, txn: Txn) {
    return this.dgraph.getAll<DgraphAtom>(txn, GetAtomsService.createQuery())
  }

  private static createQuery() {
    return new DgraphQueryBuilder()
      .setTypeFunc(DgraphEntityType.Atom)
      .addBaseFields()
      .addRecurseDirective()
      .addExpandAll()
  }
}