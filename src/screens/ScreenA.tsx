import { View, Text, Button } from "react-native";
import React from "react";

export default function ScreenA({ navigation }) {
  function handleOpenScreen() {
    navigation.navigate("screenB");
  }
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "red" }}>
      <Text>ScreenA</Text>
      <Button title="Ir para tela B" onPress={handleOpenScreen} />
    </View>
  );
}
