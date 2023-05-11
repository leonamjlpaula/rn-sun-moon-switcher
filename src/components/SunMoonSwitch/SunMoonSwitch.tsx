import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const HEIGHT = 60;
const WIDTH = 200;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    alignItems: "center",
    backgroundColor: "#777",
    borderRadius: HEIGHT / 2,
  },
});

const SunMoonSwitch = () => {
  const [isDay, setIsDay] = useState(true);

  return (
    <Pressable onPress={() => setIsDay((p) => !p)}>
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    </Pressable>
  );
};

export default SunMoonSwitch;
