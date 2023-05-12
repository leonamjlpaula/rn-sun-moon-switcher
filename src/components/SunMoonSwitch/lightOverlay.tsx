import React, { useMemo } from "react";
import { ViewStyle } from "react-native";

import Animated, {
  interpolate,
  useAnimatedStyle,
  AnimateStyle,
} from "react-native-reanimated";

const transparency = "#FFF2";

export const NUMBER_OF_LIGHT_OVERLAYS = 3;

export const LightOverlay = ({ index, width, height, transition }) => {
  const overlaySize = height * (0.6 * index + 1.4);

  const overlayStyle = useMemo<AnimateStyle<ViewStyle>>(
    () => ({
      position: "absolute",
      height: overlaySize,
      width: overlaySize,
      borderRadius: overlaySize / 2,
      left: 0,
      top: (height - overlaySize) / 2 - 2,
      backgroundColor: transparency,
    }),
    [overlaySize]
  );

  const overlayTranslateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            transition.value,
            [0, 1],
            [0, width - overlaySize]
          ),
        },
      ],
    };
  });

  return <Animated.View style={[overlayStyle, overlayTranslateStyle]} />;
};
