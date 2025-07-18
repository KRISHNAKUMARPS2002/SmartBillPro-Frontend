import { StyleSheet } from "react-native";

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8EAF6", // Light Indigo Background
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 16,
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1A237E", // Indigo
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#1A237E", // Indigo
  },
  registerButton: {
    backgroundColor: "#64B5F6", // Light Blue
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  linkText: {
    marginTop: 16,
    fontSize: 16,
    color: "#1A237E",
    textAlign: "center",
  },
});

export default authStyles;
