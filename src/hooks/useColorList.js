import { useState } from 'react'
import { generateRandomColors } from '../helpers/colors'

export const useColorList = (numColor) => {
  const [colors, setColors] = useState(generateRandomColors(numColor))

  function GenerateOtherColors () {
    setColors(generateRandomColors(numColor))
  }

  return [colors, GenerateOtherColors]
}
