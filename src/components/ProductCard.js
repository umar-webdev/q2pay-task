import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.stock}>
          Stock left: <Text style={styles.stocks}>{item.stock}</Text>
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  description: {
    color: "#666",
    marginTop: 10,
    fontSize: 11,
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    marginTop: 2,
    fontSize: 14,
    color: "#4caf50",
  },
  stocks: {
    color: "red",
    fontSize: 10,
  },
  stock: {
    fontSize: 10,
  },
});

export default ProductCard;
