// ProductCard.js

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
    marginHorizontal: 16, // Use marginHorizontal instead of paddingHorizontal
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    marginLeft:15,
    borderRadius: 90, // Match the container's border radius
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
