import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import AuthInput from "./components/AuthInput";
import authStyles from "./styles/auth.styles";

export default function Register() {
  const router = useRouter();
  const [userId, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = () => {
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    console.log({ userId, password });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingBottom: 30,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={authStyles.container}>
          <View style={authStyles.card}>
            <Text style={authStyles.title}>Register</Text>

            <AuthInput
              placeholder="UserID"
              value={userId}
              onChangeText={setUserID}
            />
            <AuthInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              isPassword
            />
            <AuthInput
              placeholder="Confirm Password"
              value={confirm}
              onChangeText={setConfirm}
              secureTextEntry
              isPassword
            />

            <TouchableOpacity
              style={[authStyles.button, authStyles.registerButton]}
              onPress={handleRegister}
            >
              <Text style={authStyles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={authStyles.linkText}>
                Already have an account?{" "}
                <Text style={{ fontWeight: "bold", color: "#007AFF" }}>
                  Login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
