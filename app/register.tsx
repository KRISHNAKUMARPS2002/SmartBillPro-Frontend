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
import { useState } from "react";
import { useRouter } from "expo-router";
import AuthInput from "./components/AuthInput";
import authStyles from "./styles/auth.styles";
import { register } from "../libs/auth";

export default function Register() {
  const router = useRouter();

  const [userId, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    userId: "",
    password: "",
    confirm: "",
    general: "",
  });

  const handleRegister = async () => {
    // Clear previous errors
    setErrors({ userId: "", password: "", confirm: "", general: "" });

    let hasError = false;
    const newErrors = { userId: "", password: "", confirm: "", general: "" };

    if (!userId.trim()) {
      newErrors.userId = "User ID is required";
      hasError = true;
    }

    if (!password) {
      newErrors.password = "Password is required";
      hasError = true;
    }

    if (!confirm) {
      newErrors.confirm = "Confirm Password is required";
      hasError = true;
    }

    if (password && confirm && password !== confirm) {
      newErrors.confirm = "Passwords do not match";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      const user = await register({ userId, password });
      //console.log("Registered user:", user);
      router.replace("/dashboard");
    } catch (error: any) {
      console.error("Registration failed", error);
      setErrors((prev) => ({
        ...prev,
        general: error.response?.data?.message || "Registration failed",
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

          <Text style={authStyles.title}>Create Account</Text>
          <Text style={authStyles.subtitle}>Register to use SmartBillPro</Text>

          <View style={authStyles.card}>
            <AuthInput
              placeholder="User ID"
              value={userId}
              onChangeText={setUserID}
              editable={!loading}
            />
            {errors.userId ? (
              <Text style={{ color: "red", marginTop: 2 }}>
                {errors.userId}
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
            <AuthInput
              placeholder="Confirm Password"
              value={confirm}
              onChangeText={setConfirm}
              secureTextEntry
              isPassword
              editable={!loading}
            />
            {errors.confirm ? (
              <Text style={{ color: "red", marginTop: 2 }}>
                {errors.confirm}
              </Text>
            ) : null}

            {/* General error message (like from server) */}
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
                authStyles.registerButton,
                loading && { opacity: 0.6 },
              ]}
              onPress={handleRegister}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={authStyles.buttonText}>Register</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={authStyles.linkText}>
                Already have an account?{" "}
                <Text style={authStyles.linkHighlight}>Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
