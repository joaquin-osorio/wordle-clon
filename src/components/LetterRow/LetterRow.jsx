import React from 'react';
import { Flex } from '@chakra-ui/react';
import LetterDisplay from '../LetterDisplay/LetterDisplay';

const LetterRow = () => {
    return (
        <Flex direction='row' gap='0.4em'>
            <LetterDisplay letter='l' type='input'/>
            <LetterDisplay letter='l' type='neutral'/>
            <LetterDisplay letter='l' type='wrong'/>
            <LetterDisplay letter='l' type='right'/>
            <LetterDisplay letter='l' type='misplaced'/>
            <LetterDisplay letter='l' />
        </Flex >
    );
};

export default LetterRow;