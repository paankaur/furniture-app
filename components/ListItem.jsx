import { colors } from "@/utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ListItem({ title, subtitle, onPress, style }) {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <Ionicons name="chevron-forward-sharp" size={32} color={colors.blue} paddingHorizontal={8} paddingVertical={2} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
    borderRadius: 8,
   // backgroundColor: "rgba(245, 245, 245, 0.43)",
    boxShadow: "0px 2px 3.84px rgba(0, 0, 0, 0.05)",
  },
  title: {
    paddingHorizontal: 8,
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "bold",
    color: colors.blue,
  },
  subtitle: {
    paddingHorizontal: 8,
    fontFamily: "Montserrat",
    fontSize: 14,
    color: colors.grey,
  },
});
