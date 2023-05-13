import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BORDER_WIDTH, HEIGHT, WIDTH } from "./constants";
import { Circle } from "./circle";
import { LightOverlay } from "./lightOverlay";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: HEIGHT * 0.8,
    width: HEIGHT * 0.8,
    left: HEIGHT * 0.1,
    top: (HEIGHT - HEIGHT * 0.8) / 2 - BORDER_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  cratersContainer: {
    height: HEIGHT * 0.8,
    width: HEIGHT * 0.8,
  },
  sunMoon: {
    height: HEIGHT * 0.8,
    width: HEIGHT * 0.8,
    position: "absolute",
    borderRadius: (HEIGHT * 0.8) / 2,
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

  const sunColorAnimationStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      transition.value,
      [0, 1],
      ["#ffc800", "#DDD"]
    ),
  }));

  const cratersAnimationStyle = useAnimatedStyle(() => ({
    opacity: transition.value,
  }));

  return (
    <Animated.View style={[styles.container, sunTranslateStyle]}>
      {new Array(3).fill(0).map((_, i) => (
        <LightOverlay index={i} key={i} />
      ))}
      <Animated.View style={[styles.sunMoon, sunColorAnimationStyle]} />
      <Animated.View style={[styles.cratersContainer, cratersAnimationStyle]}>
        <Circle bottom={10} left={6} radius={10} backgroundColor="#AAA" />
        <Circle bottom={8} left={28} radius={6} backgroundColor="#AAA" />
        <Circle bottom={34} left={20} radius={4} backgroundColor="#AAA" />
      </Animated.View>
    </Animated.View>
  );
};
