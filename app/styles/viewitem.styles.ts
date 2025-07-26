import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";
import { FONTS, FONT_SIZES } from "@/constants/typography";

const viewStyles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
    marginBottom: 24,
    padding: 16,
    shadowColor: COLORS.DARK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 14,
    marginBottom: 12,
  },
  details: {
    marginBottom: 10,
  },
  name: {
    fontSize: FONT_SIZES.XLARGE,
    fontFamily: FONTS.HEADER_BOLD,
    color: COLORS.DARK,
    marginBottom: 4,
  },
  description: {
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONTS.PRIMARY,
    color: COLORS.MEDIUM,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.INPUT_BORDER,
    marginVertical: 8,
  },
  priceTag: {
    backgroundColor: COLORS.ACCENT_LIGHT,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  price: {
    fontSize: FONT_SIZES.LARGE,
    fontFamily: FONTS.PRIMARY_BOLD,
    color: COLORS.ACCENT_DARK,
  },
  stockBadge: {
    position: "absolute",
    top: 16,
    left: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: COLORS.SUCCESS,
  },
  outOfStockBadge: {
    backgroundColor: COLORS.ERROR,
  },
  stockText: {
    fontSize: FONT_SIZES.SMALL,
    color: COLORS.WHITE,
    fontFamily: FONTS.PRIMARY_BOLD,
  },
  deleteButton: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: COLORS.ERROR,
    padding: 10,
    borderRadius: 24,
    elevation: 3,
  },
});

export default viewStyles;
