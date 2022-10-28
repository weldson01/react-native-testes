import { NavigationContainer } from "@react-navigation/native";
import { StackRouters } from "./StackRouters";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRouters />
    </NavigationContainer>
  );
}
