import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BORDER_WIDTH, HEIGHT, WIDTH } from "./constants";

const styles = StyleSheet.create({
  sun: {
    position: "absolute",
    height: HEIGHT * 0.8,
    width: HEIGHT * 0.8,
    borderRadius: (HEIGHT * 0.8) / 2,
    left: HEIGHT * 0.1,
    top: (HEIGHT - HEIGHT * 0.8) / 2 - BORDER_WIDTH,
    backgroundColor: "#f7cd36",
  },
});

export const SunMoon = ({ transition }) => {
  const sunTranslateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            transition.value,
            [0, 1],
            [0, WIDTH - 16 - HEIGHT * 0.8]
          ),
        },
      ],
    };
  });

  return <Animated.View style={[styles.sun, sunTranslateStyle]} />;
};
