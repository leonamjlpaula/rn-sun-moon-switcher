import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 60,
    alignItems: "center",
    backgroundColor: "#777",
  },
});

const SunMoonSwitch = () => {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
};

export default SunMoonSwitch;
