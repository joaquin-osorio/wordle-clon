import React, { useEffect, useState } from "react";
import LetterGrid from "./components/LetterGrid/LetterGrid";
import { Flex } from "@chakra-ui/react";
import { selectRandomWord } from "./utils/functions";
import { words } from "./utils/words";

const App = () => {
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    setCorrectWord(selectRandomWord(words));
  }, []);

  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bg="#121214"
    >
      {correctWord ? <LetterGrid correctWord={correctWord} /> : <></>}
    </Flex>
  );
};

export default App;
