import React from "react";

import { storiesOf } from "@storybook/react-native";

import { View } from "react-native";
import { SunMoonSwitch } from "../../../src";

storiesOf("Sample Button", module)
  .addDecorator((getStory) => <View style={{ flex: 1 }}>{getStory()}</View>)
  .add("Sample SunMoonSwitch Story", () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <SunMoonSwitch />
      </View>
    );
  });
