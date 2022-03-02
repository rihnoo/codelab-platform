import { EntityLike, Maybe, Nullish } from '@codelab/shared/abstract/types'
import { WILDCARD_ID } from './cacheTags'

//
export const providesAll = <
  R extends Nullish<Array<EntityLike>>,
  T extends string,
>(
  resultsWithIds: R,
  type: T,
) => {
  return resultsWithIds
    ? [
        { type, id: WILDCARD_ID },
        ...resultsWithIds.map(({ id }) => ({ type, id })),
      ]
    : [{ type, id: WILDCARD_ID }]
}

export const providesById = <R extends Maybe<string>, T extends string>(
  id: R,
  type: T,
) => {
  return [{ type, id }]
}

export const invalidatesAll = <T extends string>(...types: Array<T>) =>
  types.map((type) => ({ type, id: WILDCARD_ID }))

export const invalidatesById = <R extends Maybe<string>, T extends string>(
  id: R,
  ...types: Array<T>
) => types.map((type) => (id ? { type, id } : { type, id: WILDCARD_ID }))

export const invalidatesByIds = <
  R extends Nullish<Array<EntityLike>>,
  T extends string,
>(
  resultsWithIds: R,
  ...types: Array<T>
) =>
  resultsWithIds?.reduce(
    (acc, { id }) =>
      acc?.length
        ? [...acc, ...invalidatesById(id, ...types)]
        : [...invalidatesById(id, ...types)],
    [] as any,
  )
