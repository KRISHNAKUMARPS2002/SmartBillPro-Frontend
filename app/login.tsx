import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import AuthInput from "./components/AuthInput";
import authStyles from "./styles/auth.styles";
import { login } from "../libs/auth";

export default function Login() {
  const router = useRouter();
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    userID: "",
    password: "",
    general: "",
  });

  const handleLogin = async () => {
    setErrors({ userID: "", password: "", general: "" });

    let hasError = false;
    const newErrors = { userID: "", password: "", general: "" };

    if (!userID.trim()) {
      newErrors.userID = "User ID is required";
      hasError = true;
    }

    if (!password) {
      newErrors.password = "Password is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const user = await login({ userId: userID, password });
      router.replace("/dashboard");
    } catch (error: any) {
      //console.error("Login failed", error);
      setErrors((prev) => ({
        ...prev,
        general: error.response?.data?.message || "Login failed",
      }));
    } finally {
      setLoading(false);
    }
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
          <Image
            source={require("../assets/images/logo.png")}
            style={authStyles.logo}
          />

          <Text style={authStyles.title}>Welcome Back</Text>
          <Text style={authStyles.subtitle}>
            Login to your SmartBillPro account
          </Text>

          <View style={authStyles.card}>
            <AuthInput
              placeholder="User ID"
              value={userID}
              onChangeText={setUserID}
              editable={!loading}
            />
            {errors.userID ? (
              <Text style={{ color: "red", marginTop: 2 }}>
                {errors.userID}
              </Text>
            ) : null}

            <AuthInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              isPassword
              editable={!loading}
            />
            {errors.password ? (
              <Text style={{ color: "red", marginTop: 2 }}>
                {errors.password}
              </Text>
            ) : null}

            {errors.general ? (
              <Text
                style={{ color: "red", textAlign: "center", marginBottom: 10 }}
              >
                {errors.general}
              </Text>
            ) : null}

            <TouchableOpacity
              style={[
                authStyles.button,
                authStyles.loginButton,
                loading && { opacity: 0.6 },
              ]}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={authStyles.buttonText}>Login</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text style={authStyles.linkText}>
                Don’t have an account?{" "}
                <Text style={authStyles.linkHighlight}>Register</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
