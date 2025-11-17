import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ title, onPress, style }) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4f63ac',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});