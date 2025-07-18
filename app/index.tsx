// app/index.tsx
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import authStyles from "./styles/auth.styles";

export default function Index() {
  const router = useRouter();

  return (
    <View style={authStyles.container}>
      <View style={authStyles.card}>
        <Text style={authStyles.title}>Hotel Billing System</Text>

        <Pressable
          onPress={() => router.push("/login")}
          style={[authStyles.button, authStyles.loginButton]}
        >
          <Text style={authStyles.buttonText}>Login</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/register")}
          style={[authStyles.button, authStyles.registerButton]}
        >
          <Text style={authStyles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}
