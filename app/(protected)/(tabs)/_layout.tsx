import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { useAuth } from "../../../AuthProvider";

export default function TabLayout() {
  const { authInitialized } = useAuth();
  console.log(authInitialized);

  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="two" />
    </Tabs>
  );
}
