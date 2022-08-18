import { OGM_TYPES } from '@codelab/shared/abstract/codegen'

export const sortInterfaceTypesFields = (
  interfaceTypes: Array<OGM_TYPES.InterfaceType>,
) => {
  return interfaceTypes.map((interfaceType) => ({
    ...interfaceType,
    fieldsConnection: {
      edges: interfaceType.fieldsConnection.edges.sort((a, b) =>
        a.key > b.key ? 1 : -1,
      ),
    },
  }))
}