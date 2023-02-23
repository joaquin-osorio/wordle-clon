import React, { useEffect, useState, useRef } from "react";
import { Flex, useToast, Button } from "@chakra-ui/react";
import LetterRow from "../LetterRow/LetterRow";
import { selectRandomWord } from "../../utils/functions";
import { words } from "../../utils/words";

const LetterGrid = () => {
  const [rowIndex, setRowIndex] = useState(0);
  const [string, setString] = useState("");
  const [stringArr, setStringArr] = useState(["", "", "", "", "", ""]);
  const [correctWord, setCorrectWord] = useState(selectRandomWord(words));
  const stringRef = useRef(string);
  const indexRef = useRef(rowIndex);
  const arrRef = useRef(stringArr);
  const correctRef = useRef(correctWord);

  const toast = useToast();

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (isLetter(e.key)) {
        setString((prev) => (prev.length < 6 ? prev + e.key : prev));
      } else if (e.key === "Backspace") {
        setString((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter") {
        if (stringRef.current.length < 6) return; //Check if the word is complete
        const tempArr = [...arrRef.current];
        tempArr[indexRef.current] = stringRef.current;
        setStringArr(tempArr);
        setRowIndex((prev) => prev + 1);
        if (stringRef.current.includes(correctRef.current)) {
          toast({
            title: "Ganaste!",
            description: "Sos un capo!",
            status: "success",
            duration: 3000,
            isClosable: false,
            position: "top",
          });
          //Rellenar los espacios vacios con espacios
          const tempArr = [...arrRef.current];
          tempArr[indexRef.current] = stringRef.current;
          for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] === "") {
              tempArr[i] = "      ";
            }
          }
          setStringArr(tempArr);
          setRowIndex(6);
        }
        setString("");
        console.log(arrRef.current);
        if (indexRef.current === 5) {
          if (!tempArr.includes(correctRef.current)) {
            toast({
              title: "Perdiste!",
              description: `La palabra correcta era ${correctRef.current}`,
              status: "error",
              duration: 3000,
              isClosable: false,
              position: "top",
            });
          }
        }
      }
    });
    return () => {
      document.removeEventListener("keydown", () => {});
    };
  }, []);

  useEffect(() => {
    stringRef.current = string;
  }, [string]);

  useEffect(() => {
    indexRef.current = rowIndex;
  }, [rowIndex]);

  useEffect(() => {
    arrRef.current = stringArr;
  }, [stringArr]);

  useEffect(() => {
    correctRef.current = correctWord;
  }, [correctWord])

  const isLetter = (str) => {
    if (str.length > 1) return false;
    return /^[a-zA-Z]$/.test(str);
  };

  const resetStates = () => {
    setRowIndex(0)
    setString('')
    setStringArr(["", "", "", "", "", ""])
    setCorrectWord(selectRandomWord(words))
  }

  return (
    <Flex direction="column" gap="0.4em">
      <LetterRow
        word={rowIndex === 0 ? string : stringArr[0]}
        correctWord={rowIndex <= 0 ? undefined : correctWord}
      />
      <LetterRow
        word={rowIndex === 1 ? string : stringArr[1]}
        correctWord={rowIndex <= 1 ? undefined : correctWord}
      />
      <LetterRow
        word={rowIndex === 2 ? string : stringArr[2]}
        correctWord={rowIndex <= 2 ? undefined : correctWord}
      />
      <LetterRow
        word={rowIndex === 3 ? string : stringArr[3]}
        correctWord={rowIndex <= 3 ? undefined : correctWord}
      />
      <LetterRow
        word={rowIndex === 4 ? string : stringArr[4]}
        correctWord={rowIndex <= 4 ? undefined : correctWord}
      />
      <LetterRow
        word={rowIndex === 5 ? string : stringArr[5]}
        correctWord={rowIndex <= 5 ? undefined : correctWord}
      />

      <Button onClick={resetStates}>Reset</Button>
    </Flex>
  );
};

export default LetterGrid;

//TODO: If it's not complete, add a little shake animation to the row
//TODO: If all the words are completed, show a message and reset the game
