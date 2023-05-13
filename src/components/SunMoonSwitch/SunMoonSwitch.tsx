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

  const scaleAnimation = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(transition.value, [0, 1], [-HEIGHT, 0]) },
    ],
  }));

  return (
    <Pressable onPress={() => setIsDay((p) => !p)}>
      <Animated.View style={[styles.container, backgroundAnimation]}>
        <Animated.View style={[styles.starsContainer, scaleAnimation]}>
          <Star size={12} top={20} left={36} transition={transition} />
          <Star size={5} top={10} left={28} transition={transition} />
          <Star size={5} top={30} left={20} transition={transition} />
          <Star size={5} top={40} left={50} transition={transition} />
          <Star size={8} top={15} left={80} transition={transition} />
        </Animated.View>
        <Clouds transition={transition} />
        <SunMoon transition={transition} />
      </Animated.View>
    </Pressable>
  );
};

export default SunMoonSwitch;
