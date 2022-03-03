import { CRUDModalState } from '@codelab/frontend/abstract/core'
import {
  createCrudSlice,
  initialCrudState,
} from '@codelab/frontend/view/components'
import { AtomType } from '@codelab/shared/abstract/codegen'
import { IHook } from '@codelab/shared/abstract/core'
import { PayloadAction } from '@reduxjs/toolkit'
import { DefaultRootState } from 'react-redux'

export type HookState = CRUDModalState<IHook> & {
  selectedType?: AtomType
}

export type SetSelectedTypeAction = {
  selectedType: AtomType
}

const initialState: CRUDModalState<IHook> = {
  ...initialCrudState,
}

export const hookSlice = createCrudSlice('hook', initialState, {
  setSelectedType: (
    state: HookState,
    { payload }: PayloadAction<SetSelectedTypeAction>,
  ) => ({
    ...state,
    selectedType: payload.selectedType,
  }),
  resetSelectedType: (state: HookState) => ({
    ...state,
    selectedType: undefined,
  }),
})

export const hookActions = hookSlice.actions
export const hookReducer = hookSlice.reducer

export const selectHook = (rootState: DefaultRootState) => rootState.hook