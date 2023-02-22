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

  console.log(stringArr);

  return (
    <Flex direction="column" gap="0.4em">
      <LetterRow word={rowIndex === 0 ? string : stringArr[0]} />
      <LetterRow word={rowIndex === 1 ? string : stringArr[1]} />
      <LetterRow word={rowIndex === 2 ? string : stringArr[2]} />
      <LetterRow word={rowIndex === 3 ? string : stringArr[3]} />
      <LetterRow word={rowIndex === 4 ? string : stringArr[4]} />
      <LetterRow word={rowIndex === 5 ? string : stringArr[5]} />
    </Flex>
  );
};

export default LetterGrid;
