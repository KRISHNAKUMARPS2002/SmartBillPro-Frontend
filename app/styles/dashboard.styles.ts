import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";
import { FONTS, FONT_SIZES } from "@/constants/typography";

const dashboardStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: "center",
  },
  header: {
    fontFamily: FONTS.HEADER,
    fontSize: FONT_SIZES.TITLE,
    color: COLORS.PRIMARY_DARK,
    marginTop: 40,
    marginBottom: 5,
  },
  subHeader: {
    fontFamily: FONTS.DATA,
    fontSize: FONT_SIZES.MEDIUM,
    color: COLORS.MEDIUM,
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
    columnGap: 20,
  },
  card: {
    width: "47%",
    aspectRatio: 1,
    borderRadius: 20,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.DARK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  cardText: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONTS.PRIMARY,
    marginTop: 10,
    textAlign: "center",
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: COLORS.ERROR,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    width: "100%",
  },
  logoutText: {
    color: COLORS.WHITE,
    fontFamily: FONTS.PRIMARY,
    fontSize: FONT_SIZES.MEDIUM,
  },
});

export default dashboardStyles;
