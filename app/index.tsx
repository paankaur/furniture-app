import { View } from "react-native";
import Splash from "@/app/Splash";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
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
