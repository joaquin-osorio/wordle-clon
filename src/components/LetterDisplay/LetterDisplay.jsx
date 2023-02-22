import React from "react";
import { Flex, Text } from "@chakra-ui/react";

//Types disponibles: input, neutral, wrong, right, misplaced

const LetterDisplay = ({ type, letter }) => {
  let bgColor = "none";
  switch (type) {
    case "input":
      bgColor = "none";
      break;
    case "neutral":
      bgColor = "none";
      break;
    case "wrong":
      bgColor = "#3a3a3b";
      break;
    case "right":
      bgColor = "#538d4e";
      break;
    case "misplaced":
      bgColor = "#b59f3b";
      break;
    default:
      bgColor = "none";
  }

  let borderStyle = "none";
  switch (type) {
    case "input":
      borderStyle = "2px solid #3a3a3b";
      break;
    case "neutral":
      borderStyle = "2px solid #3a3a3b";
      break;
    case undefined:
      borderStyle = "2px solid #3a3a3b";
      break;
    default:
      borderStyle = "none";
  }

  return (
    <Flex
      w="4em"
      h="4em"
      border={borderStyle}
      justifyContent="center"
      alignItems="center"
      bg={bgColor}
    >
      <Text fontSize="3xl" fontWeight="bold" color="#FFF">
        {letter ? letter.toUpperCase() : ''}
      </Text>
    </Flex>
  );
};

export default LetterDisplay;
