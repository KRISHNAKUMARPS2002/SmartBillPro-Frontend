// app/components/AuthInput
import { TextInput, StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { COLORS } from "@/constants/colors";
import { FONT_SIZES, FONTS } from "@/constants/typography";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  isPassword?: boolean;
  editable?: boolean;
}

export default function AuthInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  isPassword = false,
  editable = true,
}: Props) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && hidePassword}
        placeholderTextColor={COLORS.PLACEHOLDER}
        editable={editable}
      />
      {isPassword && (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setHidePassword(!hidePassword)}
          disabled={!editable}
        >
          <Ionicons
            name={hidePassword ? "eye-off-outline" : "eye-outline"}
            size={22}
            color={COLORS.ICON}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
    width: "100%",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.INPUT_BORDER,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: FONT_SIZES.MEDIUM,
    fontFamily: FONTS.PRIMARY,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});
