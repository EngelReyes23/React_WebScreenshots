import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const darkModeAtom = atomWithStorage('darkMode', false)

export const uiStateAtom = atom({ isError: false, isLoading: false })

export const isLoadingAtom = atom((get) => get(uiStateAtom).isLoading)

export const setIsLoadingAtom = atom(null, (get, set, value) => {
  set(uiStateAtom, { ...get(uiStateAtom), isLoading: value })
})

export const isDarkModeAtom = atom((get) => get(darkModeAtom))

export const toggleDarkModeAtom = atom(null, (get, set) => {
  set(darkModeAtom, !get(darkModeAtom))
})
