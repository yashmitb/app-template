import React from "react";
import { View } from "react-native";
import { getAuth, signOut } from "firebase/auth";

import {
  Layout,
  Button,
  useTheme,
  themeColor,
  Text,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isDarkmode ? "#17171E" : themeColor.white100,
      }}
    >
      <Text>Test Screen</Text>
      <Button
        text="Go to second screen"
        onPress={() => {
          navigation.navigate("SecondScreen");
        }}
        style={{
          marginTop: 10,
        }}
      />
      <Button
        status="danger"
        text="Logout"
        onPress={() => {
          signOut(auth);
        }}
        style={{
          marginTop: 10,
        }}
      />
      <Button
        text={isDarkmode ? "Light Mode" : "Dark Mode"}
        status={isDarkmode ? "success" : "warning"}
        onPress={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
        style={{
          marginTop: 10,
        }}
      />
    </View>
  );
}
