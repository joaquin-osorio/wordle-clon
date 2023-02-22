import React, { useEffect, useState, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import LetterRow from "../LetterRow/LetterRow";

const LetterGrid = () => {
  const [rowIndex, setRowIndex] = useState(0);
  const [string, setString] = useState("");
  const [stringArr, setStringArr] = useState(["", "", "", "", "", ""]);
  const stringRef = useRef(string);
  const indexRef = useRef(rowIndex);
  const arrRef = useRef(stringArr);

  const correctWord='tarado'

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (isLetter(e.key)) {
        setString((prev) => (prev.length < 6 ? prev + e.key : prev));
      } else if (e.key === "Backspace") {
        setString((prev) => prev.slice(0, -1));
      } else if (e.key === "Enter") {
        const tempArr = [...arrRef.current];
        tempArr[indexRef.current] = stringRef.current;
        setStringArr(tempArr);
        setRowIndex((prev) => prev + 1);
        setString("");
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

  const isLetter = (str) => {
    if (str.length > 1) return false;
    return /^[a-zA-Z]$/.test(str);
  };

  return (
    <Flex direction="column" gap="0.4em">
      <LetterRow word={rowIndex === 0 ? string : stringArr[0]} correctWord={rowIndex <= 0 ? undefined : correctWord}/>
      <LetterRow word={rowIndex === 1 ? string : stringArr[1]} correctWord={rowIndex <= 1 ? undefined : correctWord}/>
      <LetterRow word={rowIndex === 2 ? string : stringArr[2]} correctWord={rowIndex <= 2 ? undefined : correctWord}/>
      <LetterRow word={rowIndex === 3 ? string : stringArr[3]} correctWord={rowIndex <= 3 ? undefined : correctWord}/>
      <LetterRow word={rowIndex === 4 ? string : stringArr[4]} correctWord={rowIndex <= 4 ? undefined : correctWord}/>
      <LetterRow word={rowIndex === 5 ? string : stringArr[5]} correctWord={rowIndex <= 5 ? undefined : correctWord}/>

    </Flex>
  );
};

export default LetterGrid;

//TODO: Add a conditional to check if the word is completed before moving to the next row
//TODO: If it's not complete, add a little shake animation to the row
//TODO: If all the words are completed, show a message and reset the game
