import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import AuthInput from "./components/AuthInput";
import authStyles from "./styles/auth.styles";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // handle login logic
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={authStyles.container}>
          <View style={authStyles.card}>
            <Text style={authStyles.title}>Login</Text>

            <AuthInput
              placeholder="UserID"
              value={email}
              onChangeText={setEmail}
            />
            <AuthInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              isPassword
            />

            <TouchableOpacity
              style={[authStyles.button, authStyles.loginButton]}
              onPress={handleLogin}
            >
              <Text style={authStyles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text style={authStyles.linkText}>
                Don’t have an account?{" "}
                <Text style={{ color: "#007AFF", fontWeight: "bold" }}>
                  Register
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
