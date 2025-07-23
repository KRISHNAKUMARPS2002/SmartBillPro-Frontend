// app/styles/auth.styles.ts
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";
import { FONTS, FONT_SIZES } from "@/constants/typography";

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
    resizeMode: "contain",
  },
  title: {
    fontSize: FONT_SIZES.TITLE,
    fontFamily: FONTS.HEADER,
    color: COLORS.PRIMARY_DARK,
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONTS.PRIMARY,
    color: COLORS.LIGHT,
    textAlign: "center",
    marginBottom: 24,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    padding: 24,
    borderRadius: 16,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
  },
  loginButton: {
    backgroundColor: COLORS.PRIMARY,
  },
  registerButton: {
    backgroundColor: COLORS.PURPLE,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZES.LARGE,
    fontFamily: FONTS.PRIMARY,
  },
  linkText: {
    marginTop: 16,
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONTS.PRIMARY,
    color: COLORS.LIGHT,
    textAlign: "center",
  },
  linkHighlight: {
    color: COLORS.PRIMARY,
    fontWeight: "bold",
  },
});

export default authStyles;
