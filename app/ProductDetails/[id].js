import products from "@/app/data/Products";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { colors } from "@/utils/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Dimensions, Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function ProductDetails() {
  const params = useLocalSearchParams();
  const { id } = params;
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  const contactSeller = () => {
    let email = 'asd@asd.asd';
    Linking.openURL(`mailto:${email}`);
  }
  return (
    <View style={styles.container}>
      <Header style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }} showSearch={false} showBack={true} />
      
        <Image
          source={{ uri: product?.image }}
          style={styles.image}
          resizeMode="cover"
        />
      
      <ScrollView style={styles.roundedContainer}>

        <Text style={styles.name}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmark}>
          <Ionicons name="bookmark" size={24} color={colors.blue} />
        </Pressable>
        <Button style={{marginTop:0, flex:1, height:60}} title="Contact Seller" onPress={contactSeller} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //marginTop: 40,
    width: "100%",
  },
  roundedContainer: {
    zIndex: 10,
    marginTop: height * 0.5 - 50,
//    alignItems: "flex-start",
//    justifyContent: "flex-start",
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    width: "100%",
   //height: height * 0.7,
   shadowTopColor: "red",
   shadowOffset: {
     width: 12,
      height: -2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: width,
    height: 450,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: -5,
    
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Gelasio_700Bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontFamily: "Gelasio_700Bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontFamily: "Gelasio_400Regular",
    marginBottom: 8,
  },
  footer: {
    zIndex: 11,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
    backgroundColor: "#f5f5f5",
    flexDirection: "row",
  },
  bookmark: {
    marginRight: 15,
    width: 60,
    height: 60,
    backgroundColor: colors.lightgray,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
