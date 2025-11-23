import { colors } from "@/utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function TabMenu({ atHome, atFavorites, atProfile }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        hitSlop={{ top: 60 }}
        onPress={() => {!atHome && router.push("/Home/Home")}}
      >
        <Ionicons
          name={atHome ? "home" : "home-outline"}
          size={50}
          color={colors.blue}
        />
      </Pressable>

      <Pressable
        hitSlop={{ top: 60 }}
        onPress={() => {!atFavorites && router.push("/Favorites/Favorites")}}
      >
        <Ionicons
          name={atFavorites ? "bookmarks" : "bookmarks-outline"}
          size={50}
          color={colors.blue}
        />
      </Pressable>

      <Pressable
        hitSlop={{ top: 60 }}
        onPress={() => {!atProfile && router.push("/Profile/Profile")}}
      >
        <Ionicons
          name={atProfile ? "person" : "person-outline"}
          size={50}
          color={colors.blue}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   /*  flex: 1, */
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 40,
    paddingVertical: 20,
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    height: 100,
    width: "100%",
    backgroundColor: colors.white,
    boxShadow: "0px -2px 4px rgba(131, 126, 126, 0.1)",
    elevation: 5,
  },
  tabItem: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
