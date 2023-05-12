import React from "react";
import { View } from "react-native";

export const Circle = ({ bottom, left, radius, backgroundColor = "white" }) => {
  return (
    <View
      style={{
        backgroundColor,
        borderRadius: radius,
        height: radius * 2,
        width: radius * 2,
        position: "absolute",
        bottom,
        left,
      }}
    />
  );
};
