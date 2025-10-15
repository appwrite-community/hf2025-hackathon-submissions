import { View, Text, StyleSheet } from "react-native";
interface PillProps {
  text: string;
  status: "success" | "error";
}
export const Pill = ({ text, status }: PillProps) => {
  return (
    <View
      style={{
        ...styles.pill,
        ...(status === "success" ? styles.pillSuccess : styles.pillError),
      }}
    >
      <Text
        style={{
          ...styles.text,
          ...(status === "success" ? styles.textSuccess : styles.textError),
        }}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    paddingInline: 4,
    borderRadius: 6,
  },
  text: {
    fontSize: 14,
  },
  textSuccess: {
    color: "#0A714F",
  },
  pillSuccess: {
    backgroundColor: "#0A714F3D",
  },
  textError: {
    color: "#B31212",
  },
  pillError: {
    backgroundColor: "#B312123D",
  },
});
