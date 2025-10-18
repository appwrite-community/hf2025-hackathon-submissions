import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

export const SuccessLine = () => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.lineLeft}>
        <View style={styles.line}>
          <LinearGradient
            colors={["#F02E6500", "#F02E65"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ height: 1, flex: 1 }}
          />
        </View>
      </View>
      <View style={styles.icon}>
        <Svg width="31" height="31" viewBox="0 0 31 31" fill="none">
          <Circle
            cx="15.3184"
            cy="15.2178"
            r="12"
            fill="#FD366E"
            fillOpacity="0.08"
            stroke="#FD366E"
            strokeOpacity="0.32"
            strokeWidth="1.8"
          />
          <Path
            d="M9.69336 17.4678L13.4434 20.4678L20.9434 10.7178"
            stroke="#FD366E"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
      <View style={styles.lineRight}>
        <View style={styles.line}>
          <LinearGradient
            colors={["#F02E65", "#F02E6500"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ height: 1, flex: 1 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  icon: {
    width: 31,
    height: 31,
  },
  lineLeft: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  lineRight: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  line: {
    height: 1,
  },
});
