import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import api from "../libs/api";
import viewStyles from "./styles/viewitem.styles";
import { Ionicons } from "@expo/vector-icons";

type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  imageUrl?: string | null;
};

export default function ViewItem() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const response = await api.get("/item");
      setItems(response.data.items);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      setLoading(false);
    }
  };

  const confirmDelete = (id: string) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this item?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteItem(id),
        },
      ]
    );
  };

  const deleteItem = async (id: string) => {
    try {
      await api.delete(`/item/${id}`);
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to delete item:", error);
      Alert.alert("Error", "Failed to delete item.");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) {
    return (
      <View style={viewStyles.centered}>
        <ActivityIndicator size="large" color="#4299e1" />
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      contentContainerStyle={viewStyles.container}
      renderItem={({ item }) => (
        <View style={viewStyles.card}>
          {item.inStock ? (
            <View style={viewStyles.stockBadge}>
              <Text style={viewStyles.stockText}>In Stock</Text>
            </View>
          ) : (
            <View style={[viewStyles.stockBadge, viewStyles.outOfStockBadge]}>
              <Text style={viewStyles.stockText}>Out of Stock</Text>
            </View>
          )}

          {item.imageUrl && (
            <Image
              source={{
                uri: `https://smartbillpro.infoedgesystem.com${item.imageUrl}`,
              }}
              style={viewStyles.image}
            />
          )}

          <View style={viewStyles.details}>
            <Text style={viewStyles.name}>{item.name}</Text>
            <Text style={viewStyles.description}>{item.description}</Text>

            <View style={viewStyles.divider} />

            <View style={viewStyles.priceTag}>
              <Text style={viewStyles.price}>₹ {item.price}</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => confirmDelete(item.id)}
            style={viewStyles.deleteButton}
          >
            <Ionicons name="trash-bin" size={20} color="white" />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
