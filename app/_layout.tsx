import { FavoritesProvider } from "@/app/context/FavoritesContext";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform, StatusBar } from "react-native";


export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS !== "android") return;
    const hideNavBar = async () => {
      await NavigationBar.setVisibilityAsync("hidden");
      await NavigationBar.setBehaviorAsync("overlay-swipe");
    };
    hideNavBar();
  }, []);
  return (
    <FavoritesProvider>
      <StatusBar hidden={true} />
      <Stack screenOptions={{ headerShown: false }} />
    </FavoritesProvider>
  );
}
