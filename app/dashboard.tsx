import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { getProfile, logout } from "../libs/auth";
import { COLORS } from "@/constants/colors";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import dashboardStyles from "./styles/dashboard.styles";

export default function Dashboard() {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getProfile();
        setUserId(user.userId);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        router.replace("/login");
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    Alert.alert("Confirm Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          await logout();
          router.replace("/login");
        },
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={dashboardStyles.container}>
      <Text style={dashboardStyles.header}>SmartBillPro</Text>
      <Text style={dashboardStyles.subHeader}>Welcome, {userId}</Text>

      <View style={dashboardStyles.grid}>
        <DashboardButton
          text="Add Item"
          color={COLORS.PRIMARY}
          icon={<MaterialIcons name="add-box" size={28} color="white" />}
          onPress={() => router.push("/add-item")}
        />
        <DashboardButton
          text="Start Billing"
          color={COLORS.SUCCESS}
          icon={<Ionicons name="receipt" size={28} color="white" />}
          onPress={() => router.push("/billing")}
        />
        <DashboardButton
          text="View Reports"
          color={COLORS.TEAL}
          icon={<FontAwesome5 name="chart-bar" size={26} color="white" />}
          onPress={() => router.push("/reports")}
        />
        <DashboardButton
          text="Settings"
          color={COLORS.GOLD}
          icon={<Entypo name="cog" size={28} color="white" />}
          onPress={() => router.push("/settings")}
        />
      </View>

      <TouchableOpacity
        style={dashboardStyles.logoutButton}
        onPress={handleLogout}
      >
        <AntDesign name="logout" size={22} color="white" />
        <Text style={dashboardStyles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function DashboardButton({
  text,
  icon,
  onPress,
  color,
}: {
  text: string;
  icon: React.ReactNode;
  onPress: () => void;
  color: string;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[dashboardStyles.card, { backgroundColor: color }]}
    >
      {icon}
      <Text style={dashboardStyles.cardText}>{text}</Text>
    </TouchableOpacity>
  );
}
