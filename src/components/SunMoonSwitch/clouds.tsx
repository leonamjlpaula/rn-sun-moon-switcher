import React from "react";
import { Circle } from "./circle";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cloudContainer: {
    position: "absolute",
    width: 180,
    height: 60,
  },
});

export const Clouds = ({ transition }) => {
  const cloudAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(transition.value, [0, 1], [0, 60]) }],
  }));

  return (
    <Animated.View style={[styles.cloudContainer, cloudAnimatedStyle]}>
      <Circle bottom={-10} left={10} radius={15} backgroundColor="#CCC" />
      <Circle bottom={-10} left={50} radius={15} backgroundColor="#CCC" />
      <Circle bottom={-20} left={70} radius={24} backgroundColor="#CCC" />
      <Circle bottom={-20} left={90} radius={32} backgroundColor="#CCC" />
      <Circle bottom={-20} left={5} radius={15} />
      <Circle bottom={-20} left={30} radius={20} />
      <Circle bottom={-20} left={60} radius={15} />
      <Circle bottom={-30} left={80} radius={24} />
      <Circle bottom={-30} left={100} radius={32} />
      <Circle bottom={-20} left={140} radius={40} />
    </Animated.View>
  );
};
