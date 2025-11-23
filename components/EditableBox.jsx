import { colors } from "@/utils/colors";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function EditableBox({
  label,
  value,
  onChangeText,
  onPress,
  editable,
  style,
}) {
  return (


    <View style={styles.salt}>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={[styles.container, style]} onPress={onPress}>
        <View style={styles.content}>
          <TextInput
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
            editable={editable}
            value={value}
            onChangeText={onChangeText}
            style={styles.input}
          />
        </View>
        {/* {!editable ? null : <MaterialCommunityIcons name="lead-pencil" size={20} color={colors.blue} />} */}
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   // marginVertical: 12,
    borderRadius: 8,
    // backgroundColor: "rgba(245, 245, 245, 0.43)",
    boxShadow: "0px 2px 3.84px rgba(0, 0, 0, 0.05)",
  },
  label: {
    paddingHorizontal: 8,
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "bold",
    color: colors.blue,
    padding: 4,
  },
  input: {
    paddingHorizontal: 8,
    fontFamily: "Montserrat",
    fontSize: 14,
    color: colors.grey,
    paddingTop: 0,
  },
  salt: {
   marginBottom: 16,
  },
});
