import { useSetAtom } from 'jotai'
import React from 'react'

// Local imports
import { resetUiStateAtom } from '../atoms/uiAtoms'
import { IconX } from './icons/IconX'

export const Alert = ({ msg }) => {
  const reset = useSetAtom(resetUiStateAtom)

  return (
    <div
      class='animate__animated animate__fadeInDown mb-5 flex items-center justify-between border-l-4 border-red-700 bg-red-50 p-4 text-red-700'
      role='alert'
    >
      <h3 class='text-sm font-medium'>{msg}</h3>

      <button
        className='rounded-full border border-red-500 p-1 transition-colors hover:bg-red-700 hover:text-red-50'
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
