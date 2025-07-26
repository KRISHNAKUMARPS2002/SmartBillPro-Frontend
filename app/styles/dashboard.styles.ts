// styles/dashboard.styles.ts
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";
import { FONTS, FONT_SIZES } from "@/constants/typography";

const dashboardStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: COLORS.BACKGROUND,
  },
  header: {
    fontFamily: FONTS.HEADER_BOLD,
    fontSize: FONT_SIZES.TITLE,
    color: COLORS.DARK,
    marginTop: 60,
    marginBottom: 6,
    textAlign: "center",
  },
  subHeader: {
    fontFamily: FONTS.PRIMARY,
    fontSize: FONT_SIZES.MEDIUM,
    color: COLORS.MEDIUM,
    marginBottom: 24,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  card: {
    width: "47%",
    aspectRatio: 1,
    borderRadius: 20,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.PRIMARY,
    shadowColor: COLORS.DARK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
    overflow: "hidden",
  },
  cardText: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZES.LARGE,
    fontFamily: FONTS.PRIMARY_BOLD,
    marginTop: 12,
    textAlign: "center",
  },
  logoutButton: {
    marginTop: 36,
    backgroundColor: COLORS.ERROR,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
    width: "100%",
    shadowColor: COLORS.DARK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutText: {
    color: COLORS.WHITE,
    fontFamily: FONTS.PRIMARY_BOLD,
    fontSize: FONT_SIZES.MEDIUM,
  },
});

export default dashboardStyles;
