import Splash from "@/app/Splash";
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync('hidden'); // hides nav bar
    NavigationBar.setBehaviorAsync('overlay-swipe'); // allows swipe to show temporarily
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Splash></Splash>
      </View>
    </SafeAreaProvider>
  );
}
