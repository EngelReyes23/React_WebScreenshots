import { atom } from 'jotai'

const initialState = { urlImage: '', urlDownload: '' }

export const stateAtom = atom(initialState)

export const setDataAtom = atom(null, (_, set, value) => {
  set(stateAtom, value)
})

export const resetStateAtom = atom(null, (_, set) => {
  set(stateAtom, initialState)
})
