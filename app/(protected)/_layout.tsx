import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  Redirect,
  Slot,
  SplashScreen,
  Stack,
  useRootNavigation,
  useRootNavigationState,
} from "expo-router";
import { Text } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../../AuthProvider";

export default function App() {
  const { authInitialized } = useAuth();
  console.log(authInitialized);

  if (!authInitialized) {
    return <Text>Loading...</Text>;
  }

  return <Slot />;
}
