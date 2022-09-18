import { useSetAtom } from 'jotai'
import React, { useRef } from 'react'

// Local imports
import { resetUiStateAtom } from '../atoms/uiAtoms'
import { IconX } from './icons/IconX'

export const Alert = ({ msg }) => {
  const reset = useSetAtom(resetUiStateAtom)

  const divRef = useRef()

  const handleClick = () => {
    console.log('click')
    divRef.current.classList.add('animate__fadeOutUp')
    setTimeout(() => {
      reset()
    }, 500)
  }

  return (
    <div
      class='animate__animated animate__fadeInDown absolute top-5 z-10 mx-auto flex w-full max-w-xs items-center justify-between rounded rounded-tl-none rounded-bl-none border-l-4 border-red-900/10 border-l-red-900 bg-red-50 p-4 text-red-700 md:max-w-2xl'
      role='alert'
      ref={divRef}
    >
      <h3 class='text-sm font-medium'>{msg}</h3>

      <button
        className='rounded-full p-1 transition-colors hover:bg-red-700 hover:text-red-50'
        onClick={handleClick}
        type='button'
      >
        <span class='sr-only'>Close</span>
        <IconX />
      </button>
    </div>
  )
}
