import { StyleSheet, Text, View } from "react-native";

interface CodeProps {
  children: string;
  variant: "primary" | "secondary";
}
export const Code = ({ children, variant }: CodeProps) => {
  return (
    <View
      style={
        variant === "primary"
          ? styles.codeContainer
          : styles.codeContainerSecondary
      }
    >
      <Text
        style={{
          ...styles.code,
          color: variant === "secondary" ? "#56565C" : "inherit",
        }}
      >
        {children}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  codeContainer: {
    paddingInline: 6,
    borderRadius: 4,
    backgroundColor: "#EDEDF0",
  },
  codeContainerSecondary: {},
  code: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    lineHeight: 20,
  },
});
