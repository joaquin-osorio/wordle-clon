import React from 'react';
import { Flex } from '@chakra-ui/react';
import LetterDisplay from '../LetterDisplay/LetterDisplay';



const LetterRow = ({ word }) => {
    return (
        <Flex direction='row' gap='0.4em'>
            <LetterDisplay letter={word[0]} type='input'/>
            <LetterDisplay letter={word[1]} type='input'/>
            <LetterDisplay letter={word[2]} type='input'/>
            <LetterDisplay letter={word[3]} type='input'/>
            <LetterDisplay letter={word[4]} type='input'/>
            <LetterDisplay letter={word[5]} type='input'/>
        </Flex >
    );
};

export default LetterRow;