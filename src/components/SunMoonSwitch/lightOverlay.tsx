import React, { useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { HEIGHT } from "./constants";

export const NUMBER_OF_LIGHT_OVERLAYS = 3;

export const LightOverlay = ({ index }) => {
  const overlaySize = HEIGHT * (index + 1.4);

  const overlayStyle = useMemo<ViewStyle>(
    () => ({
      position: "absolute",
      height: overlaySize,
      width: overlaySize,
      borderRadius: overlaySize / 2,
      backgroundColor: "#FFF2",
    }),
    [overlaySize]
  );

  return <View style={overlayStyle} />;
};
