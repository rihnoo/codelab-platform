import { IRootStore } from '@codelab/shared/abstract/core'
import { createContext, useContext } from 'react'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const StoreContext = createContext<IRootStore>(null!)

export const StoreProvider = StoreContext.Provider

export const useStore = () => {
  const store = useContext(StoreContext)

  if (!store) {
    throw new Error('StoreProvider not found')
  }

  return store
}