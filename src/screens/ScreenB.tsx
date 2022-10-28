import { View, Text, Button } from "react-native";
import React from "react";

export default function ScreenA({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "blue" }}>
      <Text>ScreenA</Text>
      <Button
        title="Ir para página A"
        onPress={() => navigation.navigate("screenA")}
      />
    </View>
  );
}
