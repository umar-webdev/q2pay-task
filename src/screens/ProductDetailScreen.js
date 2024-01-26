import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ProductDetails from "../components/ProductDetails";
import LoadingIndicator from "../components/LoadingIndicator";

const ProductDetailScreen = ({ route }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const forceRenderCallback = route.params?.forceRenderCallback;

  useEffect(() => {
    const productId = route.params?.productId;
    console.log("Product ID:", productId);
    if (productId) {
      setLoading(true);
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log("API response:", data);

          setProduct(data);
          setLoading(false);
          if (forceRenderCallback) {
            forceRenderCallback();
          }
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
          setLoading(false);
        });
    }
  }, [route.params]);

  if (!product) {
    return <LoadingIndicator />;
  }

  return (
    <ScrollView style={styles.container}>
      <ProductDetails product={product} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default ProductDetailScreen;
