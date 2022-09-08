import { useSetAtom } from 'jotai'
import React from 'react'

// Local imports
import { resetUiStateAtom } from '../atoms/uiAtoms'
import { IconX } from './icons/IconX'

export const Alert = ({ msg }) => {
  const reset = useSetAtom(resetUiStateAtom)

  return (
    <div
      class='animate__animated animate__fadeInDown p-4 flex justify-between items-center mb-5 text-red-700 border-l-4 border-red-700 bg-red-50'
      role='alert'
    >
      <h3 class='text-sm font-medium'>{msg}</h3>

      <button
        className='border border-red-500 p-1 hover:bg-red-700 rounded-full hover:text-red-50 transition-colors'
        onClick={reset}
        class='opacity-90'
        type='button'
      >
        <span class='sr-only'> Close </span>
        <IconX />
      </button>
    </div>
  )
}
