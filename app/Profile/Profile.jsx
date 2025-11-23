import Button from "@/components/Button";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import TabMenu from "@/components/TabMenu";
import { colors } from "@/utils/colors";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const router = useRouter();

  const onLogout = () => {
    router.push("/SignIn");
  };

  const [toggleListings, setToggleListings] = useState(false);
  const onBrokenListings = () => {
    setToggleListings(true);
  }

  const num = 0;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Header title={"Profile"} showLogout={true} onLogout={onLogout} />
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=2" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john@doe</Text>
          <ListItem
            title="My Listings"
            subtitle={`Already have ${num} listings`}
          />
          <ListItem
            title="Settings"
            subtitle="Account, FAQ, Contact"
            onPress={() => router.push("/Settings/Settings")}
          />
        </View>

        <Button title={toggleListings ? "Sorry, unavailable" : "Add a new listing"} onPress={onBrokenListings} style={styles.button} />
      </View>
      <TabMenu atProfile={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 0,
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 132,
    justifyContent: "space-between",
  },
  buttonContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: "#888",
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.blue,
    height: 60,
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
