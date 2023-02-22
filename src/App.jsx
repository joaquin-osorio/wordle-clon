import React from 'react';
import LetterGrid from './components/LetterGrid/LetterGrid';
import { Flex } from '@chakra-ui/react';


const App = () => {
  return (
    <Flex w='100vw' h='100vh' justifyContent='center' alignItems='center' bg='#121214'>
      <LetterGrid />
    </Flex>
  );
};

export default App;