import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductDetails = ({ product }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: product.thumbnail }} />
    </View>
    <View style={styles.info}>
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.rating}>(Ratings: {product.rating})</Text>
      <Text style={styles.price}>
        <Text style={styles.strike}>${product.price}</Text>
        <Text style={styles.discountPrice}> ${product.discountPercentage}</Text>
      </Text>

      <Text style={styles.description}>
        <Text style={styles.bold}>Description:-{"\n"}</Text>
        {product.description}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  bold: {
    marginBottom: 25,
    fontSize: 20,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
    color: "#c1a050",
  },
  category: {
    fontSize: 12,
  },
  imageContainer: {
    alignItems: "center",
  },
  strike: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "black", // Set the color for the regular price
  },
  discountPrice: {
    fontSize: 18,
    color: "#4caf50", // Set the color for the discounted price
  },
  image: {
    width: 400,
    height: 250,
  },
  info: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "#4caf50",
    marginBottom: 25,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});

export default ProductDetails;
