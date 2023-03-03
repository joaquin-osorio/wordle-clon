/* eslint-disable react/prop-types */
import React from 'react'
import { Flex } from '@chakra-ui/react'
import LetterDisplay from '../LetterDisplay/LetterDisplay'
import PropTypes from 'prop-types'

const LetterRow = ({ word, correctWord }) => {
  // Si CorrectWord es null, entonces todas las letras seran de tipo input.
  // Una vez que correct word no sea null, se buscaran que letras son verdes y se cambiara el type a right.
  // Una vez hecho esto, se buscara que letras son amarillas y se cambiara el type a misplaced

  const evaluateType = (word, correctWord, index) => {
    if (correctWord === undefined) {
      return 'input'
    } else if (word[index] === correctWord[index]) {
      return 'right'
    } else if (correctWord.includes(word[index])) {
      return 'misplaced'
    } else {
      return 'wrong'
    }
  }

  return (
        <Flex direction='row' gap='0.4em'>
            <LetterDisplay letter={word[0]} type={evaluateType(word, correctWord, 0)}/>
            <LetterDisplay letter={word[1]} type={evaluateType(word, correctWord, 1)}/>
            <LetterDisplay letter={word[2]} type={evaluateType(word, correctWord, 2)}/>
            <LetterDisplay letter={word[3]} type={evaluateType(word, correctWord, 3)}/>
            <LetterDisplay letter={word[4]} type={evaluateType(word, correctWord, 4)}/>
            <LetterDisplay letter={word[5]} type={evaluateType(word, correctWord, 5)}/>
        </Flex >
  )
}

LetterRow.PropTypes = {
  word: PropTypes.string,
  correctWord: PropTypes.string
}

export default LetterRow

// TODO: Añadir PropTypes a LetterRow
