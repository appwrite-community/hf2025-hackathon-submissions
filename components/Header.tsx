import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Platform,
  Dimensions,
} from "react-native";
import { ImageBackground } from "expo-image";
import { LoadingLine } from "@/components/status-lines/LoadingLine";
import { SuccessLine } from "@/components/status-lines/SuccessLine";
import { fontStyles } from "@/styles/font";
import { Button } from "@/components/Button";
import ReactLogo from "@/assets/images/react";
import AppwriteLogo from "@/assets/images/appwrite";

interface HeaderProps {
  state: "idle" | "loading" | "success" | "error";
  pingFunction: () => void;
}

export const Header = ({ state, pingFunction }: HeaderProps) => {
  const getStateLine = () => {
    switch (state) {
      case "success":
        return <SuccessLine />;
      case "loading":
        return <LoadingLine />;
      default:
        return <></>;
    }
  };

  const getTitleText = () => {
    switch (state) {
      case "success":
        return "Congratulations!";
      case "loading":
        return " ";
      default:
        return "Check connection";
    }
  };

  const getDescriptionText = () => {
    switch (state) {
      case "loading":
        return (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <ActivityIndicator />
            <Text style={fontStyles.bodyM}>Waiting for connection... </Text>
          </View>
        );
      case "success":
        return (
          <Text style={fontStyles.bodyM}>
            You connected to your app successfully
          </Text>
        );
      default:
        return (
          <Text style={fontStyles.bodyM}>
            Send a ping to verify the connection
          </Text>
        );
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/grid-desktop.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconsStatus}>
            <View style={styles.iconContainer}>
              <View style={styles.iconInnerContainer}>
                <ReactLogo />
              </View>
            </View>
            <View style={styles.line}>{getStateLine()}</View>
            <View style={styles.iconContainer}>
              <View style={styles.iconInnerContainer}>
                <AppwriteLogo />
              </View>
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={fontStyles.titleL}>{getTitleText()}</Text>
            <View style={styles.descriptionText}>{getDescriptionText()}</View>
            {state !== "loading" && (
              <View style={styles.buttonContainer}>
                <Button text={"Send a ping"} onPress={pingFunction} />
              </View>
            )}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  background: {
    width: "100%",
    backgroundSize: "contain",
  },
  line: {
    width:
      Platform.OS === "web"
        ? Dimensions.get("window").width < 1024
          ? 100
          : 152
        : 70,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    paddingInline: 32,
    maxWidth: 350,
    gap: 47,
  },
  iconsStatus: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === "web" ? 156 : 100,
  },
  textContainer: {
    height: 208,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  buttonContainer: {
    marginBlockStart: 24,
  },
  descriptionText: {},
  iconContainer: {
    borderRadius: 38,
    borderWidth: 1,
    borderColor: "#19191C0A",
    backgroundColor: "#F9F9FA",
    padding: 12,
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: { width: 0, height: 9.36 },
    shadowOpacity: 1,
    shadowRadius: 9.36,
    elevation: 5,
  },
  iconInnerContainer: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#FAFAFB",
    backgroundColor: "#FFFFFF",
    padding:
      Platform.OS === "web"
        ? Dimensions.get("window").width < 1024
          ? 24
          : 36
        : 20,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 4,
  },
});
