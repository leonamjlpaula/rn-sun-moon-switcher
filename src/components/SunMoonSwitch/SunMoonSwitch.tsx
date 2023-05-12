import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { withTiming, useSharedValue, Easing } from "react-native-reanimated";
import { Clouds } from "./clouds";
import { LightOverlay, NUMBER_OF_LIGHT_OVERLAYS } from "./lightOverlay";
import { BORDER_WIDTH, HEIGHT, WIDTH } from "./constants";
import { SunMoon } from "./sunMoon";

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
    borderWidth: BORDER_WIDTH,
    borderColor: "#AAA",
  },
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

  return (
    <Pressable onPress={() => setIsDay((p) => !p)}>
      <View style={styles.container}>
        <Clouds transition={transition} />
        {new Array(NUMBER_OF_LIGHT_OVERLAYS).fill(0).map((_, i) => (
          <LightOverlay
            key={i}
            index={i}
            transition={transition}
            width={WIDTH}
            height={HEIGHT}
          />
        ))}
        <SunMoon transition={transition} />
      </View>
    </Pressable>
  );
};

export default SunMoonSwitch;
