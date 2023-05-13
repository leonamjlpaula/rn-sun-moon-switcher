import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import Animated, {
  withTiming,
  useSharedValue,
  Easing,
  useAnimatedStyle,
  interpolateColor,
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
});

const timingConfig = {
  duration: 2000,
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

  return (
    <Pressable onPress={() => setIsDay((p) => !p)}>
      <Animated.View style={[styles.container, backgroundAnimation]}>
        <Clouds transition={transition} />
        <SunMoon transition={transition} />
      </Animated.View>
    </Pressable>
  );
};

export default SunMoonSwitch;
