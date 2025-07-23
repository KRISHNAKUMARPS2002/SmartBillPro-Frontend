import { View, Text, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import authStyles from "./styles/auth.styles";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const CheckToken = async () => {
      try {
        const token = await SecureStore.getItemAsync("token");
        if (token) {
          router.replace("/dashboard");
        } else {
          router.replace("/login");
        }
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    };
    CheckToken();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <View style={authStyles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={authStyles.logo}
      />

      <Text style={authStyles.title}>Welcome to SmartBillPro</Text>
      <Text style={authStyles.subtitle}>Simplify your billing experience</Text>

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
  );
}
