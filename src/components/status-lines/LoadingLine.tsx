import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet } from "react-native";

export const LoadingLine = () => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [animation]);

  const interpolatedColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#F02E65", "#F02E651A"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.line, { backgroundColor: interpolatedColor }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 2,
    alignItems: "center",
  },
  line: {
    width: "100%",
    height: 1,
  },
});
