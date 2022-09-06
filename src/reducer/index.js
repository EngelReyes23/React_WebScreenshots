import { TYPES } from '../types'

const { SET_DARK_MODE, SET_DATA, SET_ERROR, SET_LOADING } = TYPES

export const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_DARK_MODE:
      return { ...state, darkMode: payload }

    case SET_DATA:
      return { ...state, data: payload }

    case SET_ERROR:
      return { ...state, iError: payload }

    case SET_LOADING:
      return { ...state, isLoading: payload }

    default:
      return state
  }
}
