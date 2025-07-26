import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Switch,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as mime from "react-native-mime-types";
import api from "../libs/api";
import addStyles from "./styles/additem.styles";
import { COLORS } from "@/constants/colors";

export default function AddItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(true);
  const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const handleSubmit = async () => {
    if (!name || !description || !price) {
      Alert.alert("Validation", "Please fill all fields");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("inStock", inStock.toString());

    if (image) {
      const fileType = image.uri.split(".").pop();
      const mimeType = mime.lookup(image.uri) || "image/jpeg";

      formData.append("image", {
        uri:
          Platform.OS === "ios" ? image.uri.replace("file://", "") : image.uri,
        type: mimeType,
        name: `upload.${fileType}`,
      } as any);
    }

    try {
      await api.post("/item", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Alert.alert("Success", "Item created successfully");

      setName("");
      setDescription("");
      setPrice("");
      setInStock(true);
      setImage(null);
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Failed to create item");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={addStyles.container}>
        <View style={addStyles.card}>
          <Text style={addStyles.label}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Item Name"
            style={addStyles.input}
          />

          <Text style={addStyles.label}>Description</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Description"
            multiline
            style={addStyles.input}
          />

          <Text style={addStyles.label}>Price</Text>
          <TextInput
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            placeholder="Price"
            style={addStyles.input}
          />

          <View style={addStyles.stockContainer}>
            <Text style={addStyles.label}>In Stock</Text>
            <Switch value={inStock} onValueChange={setInStock} />
          </View>

          <TouchableOpacity onPress={pickImage}>
            <Text style={addStyles.imageText}>
              {image ? "Change Image" : "Pick Image"}
            </Text>
          </TouchableOpacity>

          {!image && (
            <TouchableOpacity
              onPress={pickImage}
              style={addStyles.imageDropArea}
            >
              <Text style={{ color: COLORS.PRIMARY }}>Tap to upload image</Text>
            </TouchableOpacity>
          )}

          {image?.uri && (
            <View style={{ position: "relative" }}>
              <Image
                source={{ uri: image.uri }}
                style={addStyles.previewImage}
              />
              <TouchableOpacity
                style={addStyles.cancelIcon}
                onPress={() => setImage(null)}
              >
                <Text style={addStyles.cancelText}>×</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity style={addStyles.button} onPress={handleSubmit}>
            <Text style={addStyles.buttonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
