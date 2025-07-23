// libs/auth.ts
import api from "./api";
import * as SecureStore from "expo-secure-store";

interface AuthCredentials {
  userId: string;
  password: string;
}

export const login = async ({ userId, password }: AuthCredentials) => {
  const res = await api.post("/auth/login", { userId, password });
  await SecureStore.setItemAsync("token", res.data.token);
  return res.data.user;
};

export const register = async ({ userId, password }: AuthCredentials) => {
  const res = await api.post("/auth/register", { userId, password });
  await SecureStore.setItemAsync("token", res.data.token);
  return res.data.user;
};

export const getProfile = async () => {
  const res = await api.get("/auth/me");
  return res.data.user;
};

export const logout = async () => {
  await SecureStore.deleteItemAsync("token");
};
