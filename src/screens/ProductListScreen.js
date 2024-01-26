import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductCard from "../components/ProductCard";

const ProductListScreen = ({ forceRenderCallback }) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const URL = "https://dummyjson.com/products";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const navigateToProductDetail = (productId) => {
    navigation.navigate("ProductDetails", {
      productId,
      forceRenderCallback,
    });
  };

  const renderItem = ({ item }) => (
    <ProductCard item={item} onPress={() => navigateToProductDetail(item.id)} />
  );

  return (
    <View style={styles.root}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop: 10,
  },
});

export default ProductListScreen;
