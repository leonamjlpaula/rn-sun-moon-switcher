import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Animated, {
  withSpring,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  Easing,
} from "react-native-reanimated";
import { Cloud1 } from "./cloud1";
import { Cloud2 } from "./cloud2";

const HEIGHT = 60;
const WIDTH = 180;

const transparency = "#FFF2";
const dayBackground = "#3686ef";
const nightBackground = "#333";

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    alignItems: "center",
    backgroundColor: dayBackground,
    borderRadius: HEIGHT / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#AAA",
  },
  overlay1: {
    position: "absolute",
    height: WIDTH * 0.8,
    width: WIDTH * 0.8,
    borderRadius: (WIDTH * 0.8) / 2,
    left: 0,
    top: -(WIDTH * 0.8) / 2 + HEIGHT / 2,
    backgroundColor: transparency,
  },
  overlay2: {
    position: "absolute",
    height: WIDTH * 0.65,
    width: WIDTH * 0.65,
    borderRadius: (WIDTH * 0.65) / 2,
    left: 0,
    top: -(WIDTH * 0.65) / 2 + HEIGHT / 2,
    backgroundColor: transparency,
  },
  overlay3: {
    position: "absolute",
    height: WIDTH * 0.5,
    width: WIDTH * 0.5,
    borderRadius: (WIDTH * 0.5) / 2,
    left: 0,
    top: -(WIDTH * 0.5) / 2 + HEIGHT / 2,
    backgroundColor: transparency,
  },
  sun: {
    position: "absolute",
    height: HEIGHT * 0.8,
    width: HEIGHT * 0.8,
    borderRadius: (HEIGHT * 0.8) / 2,
    left: 12,
    top: -(HEIGHT * 0.8) / 2 + HEIGHT / 2,
    backgroundColor: "#f7cd36",
  },
});

const timingConfig = {
  duration: 1000,
  easing: Easing.inOut(Easing.cubic),
};

const SunMoonSwitch = () => {
  const [isDay, setIsDay] = useState(true);
  const transition = useSharedValue(0);

  useEffect(() => {
    if (isDay) transition.value = withTiming(0, timingConfig);
    else transition.value = withTiming(1, timingConfig);
  }, [isDay]);

  const overlayTranslateStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            transition.value,
            [0, 1],
            [0, WIDTH - WIDTH * 0.8]
          ),
        },
      ],
    };
  });
  const overlayTranslateStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            transition.value,
            [0, 1],
            [0, WIDTH - WIDTH * 0.65]
          ),
        },
      ],
    };
  });
  const overlayTranslateStyle3 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            transition.value,
            [0, 1],
            [0, WIDTH - WIDTH * 0.5]
          ),
        },
      ],
    };
  });
  const sunTranslateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            transition.value,
            [0, 1],
            [0, WIDTH - 24 - HEIGHT * 0.8]
          ),
        },
      ],
    };
  });

  return (
    <Pressable onPress={() => setIsDay((p) => !p)}>
      <View style={styles.container}>
        <Cloud2 />
        <Cloud1 />
        <Animated.View style={[styles.overlay1, overlayTranslateStyle1]} />
        <Animated.View style={[styles.overlay2, overlayTranslateStyle2]} />
        <Animated.View style={[styles.overlay3, overlayTranslateStyle3]} />
        <Animated.View style={[styles.sun, sunTranslateStyle]} />
      </View>
    </Pressable>
  );
};

export default SunMoonSwitch;
