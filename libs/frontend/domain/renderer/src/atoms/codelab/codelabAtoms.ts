import { IAtomType } from '@codelab/shared/abstract/core'
import { dynamicLoader } from '../dynamicLoader'
import type { AtomsRecord } from '../types'

// Custom atom components
// Note: some of those are obsolete and replaced by hooks (or mobx platform when implemented)
export const codelabAtoms: AtomsRecord = {
  [IAtomType.GridLayout]: dynamicLoader(() =>
    import('@codelab/frontend/application/atoms').then((mod) => mod.GridLayout),
  ),
  [IAtomType.TextList]: dynamicLoader(() =>
    import('@codelab/frontend/application/atoms').then((mod) => mod.TextList),
  ),
  [IAtomType.Text]: dynamicLoader(() =>
    import('@codelab/frontend/application/atoms').then((mod) => mod.Text),
  ),
  [IAtomType.Script]: dynamicLoader(() =>
    import('@codelab/frontend/application/atoms').then(
      (mod) => mod.CodelabScript,
    ),
  ),
  // [AtomType.State]: dynamic(
  //   () =>
  //     import('@codelab/frontend/presentation/view').then(
  //       (mod) => mod.State,
  //     ) as any,
  // ),
}
