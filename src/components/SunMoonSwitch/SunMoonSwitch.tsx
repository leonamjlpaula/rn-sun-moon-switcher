import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const HEIGHT = 60;
const WIDTH = 200;

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
    height: WIDTH * 0.6,
    width: WIDTH * 0.6,
    borderRadius: (WIDTH * 0.6) / 2,
    left: 0,
    top: -(WIDTH * 0.6) / 2 + HEIGHT / 2,
    backgroundColor: transparency,
  },
  overlay3: {
    position: "absolute",
    height: WIDTH * 0.4,
    width: WIDTH * 0.4,
    borderRadius: (WIDTH * 0.4) / 2,
    left: 0,
    top: -(WIDTH * 0.4) / 2 + HEIGHT / 2,
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

const SunMoonSwitch = () => {
  const [isDay, setIsDay] = useState(true);

  return (
    <Pressable onPress={() => setIsDay((p) => !p)}>
      <View style={styles.container}>
        <View style={styles.overlay1} />
        <View style={styles.overlay2} />
        <View style={styles.overlay3} />
        <View style={styles.sun} />
      </View>
    </Pressable>
  );
};

export default SunMoonSwitch;
