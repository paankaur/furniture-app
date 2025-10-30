import React from "react";
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { colors } from "@/utils/colors";
import { useRouter } from "expo-router";
import AuthHeader from "@/components/AuthHeader";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Separator from "@/components/Separator";
import Fontisto from '@expo/vector-icons/Fontisto';

export default function SignIn() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" onPress={() => navigation.goBack()} />
      <Input label={"E-mail"} placeholder={"john.doe@example.com"} />
      <Input isPassword={true} label={"Password"} placeholder={"**********"} />
        <Button title="Sign In" onPress={() => router.push("/Home/Home")} />
        <Separator text="Or sign in with" />
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.googleBtn}>
                <Fontisto name="google" size={36} color="white" />
            </View>
            
        </TouchableOpacity>
        <Pressable  onPress={() => {
          console.log("Sign Up Pressed");
          router.push("/SignUp");
        }}>
          <Text style={styles.footerText}>Already have an account?
            <Text style={{ fontWeight: "bold" }}> Sign In</Text>
          </Text>
        </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    /* margin: "auto", */
    width: "100%",
    height: "100%",
    padding: 24,
    borderWidth: 0,
  },
    googleBtn: {
    backgroundColor: colors.googleGray,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 142,
  },
  footerText: {
    color: colors.blue,
    fontSize: 14,
    marginTop: 12,
    marginBottom: 56,
    textAlign: "center",
    fontFamily: "Montserrat",
  },
});