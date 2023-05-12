import React from "react";
import { Circle } from "./circle";

export const Cloud1 = () => {
  return (
    <>
      <Circle bottom={-20} left={5} radius={15} />
      <Circle bottom={-20} left={30} radius={20} />
      <Circle bottom={-20} left={60} radius={15} />
      <Circle bottom={-30} left={80} radius={24} />
      <Circle bottom={-30} left={100} radius={32} />
      <Circle bottom={-20} left={140} radius={40} />
    </>
  );
};
