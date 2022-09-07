import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const initialState = { errorMsg: '', isError: false, isLoading: false }

export const darkModeAtom = atomWithStorage('darkMode', false)

export const uiStateAtom = atom(initialState)

export const resetUiStateAtom = atom(null, (_, set) => {
  set(uiStateAtom, initialState)
})

export const isLoadingAtom = atom((get) => get(uiStateAtom).isLoading)

export const setIsLoadingAtom = atom(null, (get, set, value) => {
  set(uiStateAtom, { ...get(uiStateAtom), isLoading: value })
})

export const isDarkModeAtom = atom((get) => get(darkModeAtom))

export const toggleDarkModeAtom = atom(null, (get, set) => {
  set(darkModeAtom, !get(darkModeAtom))
})

export const isErrorAtom = atom((get) => get(uiStateAtom).isError)

export const setIsErrorAtom = atom(null, (get, set, msg) => {
  set(uiStateAtom, { ...get(uiStateAtom), isError: !!msg, errorMsg: msg })
})
