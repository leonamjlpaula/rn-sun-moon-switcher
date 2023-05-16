import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import Animated, {
  withTiming,
  useSharedValue,
  Easing,
  useAnimatedStyle,
  interpolateColor,
  interpolate,
} from "react-native-reanimated";
import { Clouds } from "./clouds";
import {
  BORDER_WIDTH,
  DAY_BACKGROUND,
  HEIGHT,
  NIGHT_BACKGROUND,
  WIDTH,
} from "./constants";
import { SunMoon } from "./sunMoon";
import { Star } from "./star";

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    alignItems: "center",
    borderRadius: HEIGHT / 2,
    overflow: "hidden",
    borderWidth: BORDER_WIDTH,
    borderColor: "#AAA",
  },
  starsContainer: {
    position: "absolute",
    width: WIDTH,
    height: HEIGHT,
  },
});

const timingConfig = {
  duration: 1500,
  easing: Easing.inOut(Easing.cubic),
};

const SunMoonSwitch = () => {
  const [isDay, setIsDay] = useState(true);
  const transition = useSharedValue(0);

  useEffect(() => {
    if (isDay) transition.value = withTiming(0, timingConfig);
    else transition.value = withTiming(1, timingConfig);
  }, [isDay]);

  const backgroundAnimation = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      transition.value,
      [0, 1],
      [DAY_BACKGROUND, NIGHT_BACKGROUND]
    ),
  }));

  const scaleAnimation = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(transition.value, [0, 1], [-HEIGHT, 0]) },
    ],
  }));

  return (
    <Pressable onPress={() => setIsDay((p) => !p)}>
      <Animated.View style={[styles.container, backgroundAnimation]}>
        <Animated.View style={[styles.starsContainer, scaleAnimation]}>
          <Star
            size={0.2 * HEIGHT}
            top={0.33 * HEIGHT}
            left={0.2 * WIDTH}
            transition={transition}
          />
          <Star
            size={0.083 * HEIGHT}
            top={0.1667 * HEIGHT}
            left={0.155 * WIDTH}
            transition={transition}
          />
          <Star
            size={0.083 * HEIGHT}
            top={0.5 * HEIGHT}
            left={0.278 * WIDTH}
            transition={transition}
          />
          <Star
            size={0.133 * HEIGHT}
            top={0.667 * HEIGHT}
            left={0.278 * WIDTH}
            transition={transition}
          />
          <Star
            size={0.133 * HEIGHT}
            top={0.25 * HEIGHT}
            left={0.444 * WIDTH}
            transition={transition}
          />
        </Animated.View>
        <Clouds transition={transition} />
        <SunMoon transition={transition} />
      </Animated.View>
    </Pressable>
  );
};

export default SunMoonSwitch;
