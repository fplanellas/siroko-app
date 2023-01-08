import { useState } from "react";
import { SirokoContext } from "./SirokoContext";

export const SirokoProvider = ({ children }) => {
  const [moveToPassNext, setMoveToPassNext] = useState(0);
  const [moveToPassNext2, setMoveToPassNext2] = useState(0);
  const [moveToPassNext3, setMoveToPassNext3] = useState(0);

  const [selectionPass, setSelectionPass] = useState();

  const moveToPass2 = () => {
    setMoveToPassNext(-1600);
    setMoveToPassNext2(-1600);
    setMoveToPassNext3(-1600);
  };

  const moveToPass3 = (finalFiltered) => {
    setMoveToPassNext(-3200);
    setMoveToPassNext2(-3200);
    setMoveToPassNext3(-3200);

    const code1 = JSON.parse(localStorage.getItem("code1"));
    const FinalCode = code1 + finalFiltered;
    setSelectionPass(FinalCode);
  };

  const onSelectPass1 = (sumLastTwoNumbers) => {
    localStorage.setItem("code1", JSON.stringify(sumLastTwoNumbers));
  };

  const onSelectPass2 = (finalFiltered) => {
    localStorage.setItem("code2", JSON.stringify(finalFiltered));
  };

  return (
    <SirokoContext.Provider
      value={{
        moveToPassNext,
        moveToPassNext2,
        moveToPassNext3,
        selectionPass,
        onSelectPass2,
        moveToPass2,
        moveToPass3,
        onSelectPass1,
      }}
    >
      {children}
    </SirokoContext.Provider>
  );
};
