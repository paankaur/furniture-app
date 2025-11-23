import Button from "@/components/Button";
import EditableBox from "@/components/EditableBox";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import TabMenu from "@/components/TabMenu";
import { colors } from "@/utils/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const router = useRouter();
  const onLogout = () => {
    router.push("/SignIn");
  };

  const [editing, setEditing] = useState(false);

  const toggleEditing = () => {
    setEditing(!editing);
  };
  const [values, setValues] = useState({
    name: "John Doe",
    email: "john@doe",
  });

  const onChangeValue = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const onItemPress = () => {
    Linking.openURL("https://duckduckgo.com");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.content}>
          <Header
            title={"Profile"}
            showBack={true}
            showLogout={true}
            onLogout={onLogout}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=2" }}
              style={styles.avatar}
            />

            {!editing ? (
              <Pressable onPress={toggleEditing}>
                <MaterialCommunityIcons
                  name="lead-pencil"
                  size={24}
                  color={colors.blue}
                />
              </Pressable>
            ) : null}
          </View>
          <EditableBox
            label="Name"
            value={values.name}
            onChangeText={(value) => {
              onChangeValue("name", value);
            }}
            editable={editing}
            style={styles.name}
          />
          <EditableBox
            label="Email"
            value={values.email}
            onChangeText={(value) => {
              onChangeValue("email", value);
            }}
            editable={editing}
            style={styles.email}
          />
          {editing ? (
            <Button
              style={{ marginTop: 0 }}
              title="Save Changes"
              onPress={toggleEditing}
            />
          ) : null}
          <Text style={styles.help}>Help Center</Text>
          <ListItem title="FAQ" style={styles.faq} onPress={onItemPress} />
          <ListItem
            title="Contact Us"
            style={styles.contact}
            onPress={onItemPress}
          />
          <ListItem
            title="Privacy & Terms"
            style={styles.privacy}
            onPress={onItemPress}
          />
        </View>
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
  content: {},
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
  },
  help: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  faq: {
    textAlign: "center",
    alignContent: "center",
    //  justifyContent: "center",
  },
  contact: {},
  privacy: {},
});
