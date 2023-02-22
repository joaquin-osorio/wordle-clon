import React from "react";
import { Flex } from "@chakra-ui/react";
import LetterRow from "../LetterRow/LetterRow";

const LetterGrid = () => {
  return (
    <Flex direction="column" gap="0.4em">
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
      <LetterRow />
    </Flex>
  );
};

export default LetterGrid;
