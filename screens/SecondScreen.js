import React from "react";
import { View, Text } from "react-native";
import { Layout } from "react-native-rapi-ui";

export default function ({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Second Screen</Text>
    </View>
  );
}
