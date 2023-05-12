import React from "react";
import { Circle } from "./circle";

export const Cloud2 = () => {
  return (
    <>
      <Circle bottom={-10} left={0} radius={15} backgroundColor="#CCC" />
      <Circle bottom={-10} left={50} radius={15} backgroundColor="#CCC" />
      <Circle bottom={-20} left={70} radius={24} backgroundColor="#CCC" />
      <Circle bottom={-20} left={90} radius={32} backgroundColor="#CCC" />
    </>
  );
};
