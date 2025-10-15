import { ReactNode } from "react";
import {
  Dimensions,
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

interface CardProps {
  children: ReactNode;
  href?: string;
}

export const Card = ({ children, href }: CardProps) => {
  if (href) {
    return (
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(href);
        }}
      >
        <View style={styles.card}>{children}</View>
      </TouchableOpacity>
    );
  }
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    borderColor: "#EDEDF0",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    maxWidth:
      Platform.OS === "web" && Dimensions.get("window").width >= 1024
        ? 288
        : "auto",
  },
});
