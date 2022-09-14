import { getTagGraphs } from '@codelab/backend/adapter/neo4j'
import { TagGraph } from '@codelab/shared/abstract/codegen'
import { RxTransaction } from 'neo4j-driver'
import { Observable } from 'rxjs'
import { map, reduce } from 'rxjs/operators'

export const tagRepository = {
  getTagGraphs: (txn: RxTransaction): Observable<Array<TagGraph>> =>
    txn
      .run(getTagGraphs)
      .records()
      .pipe(
        map((record) => {
          const tag = record.get(0)
          const descendants = record.get(1)

          const tagGraph = {
            ...tag,
            descendants,
          }

          return tagGraph
        }),
        reduce<any>((tagGraphs, tagGraph) => {
          return [...tagGraphs, tagGraph]
        }, []),
      ),
}