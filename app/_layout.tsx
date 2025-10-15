import { Slot } from "expo-router";
import { Platform, View } from "react-native";
import { Poppins_300Light, useFonts } from "@expo-google-fonts/poppins";
import { Inter_400Regular, Inter_300Light } from "@expo-google-fonts/inter";
import Head from "expo-router/head";

export default function HomeLayout() {
  const [loaded, error] = useFonts({
    Poppins_300Light,
    Inter_400Regular,
    Inter_300Light,
  });
  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFB" }}>
      {Platform.OS === "web" && (
        <Head>
          <title>Appwrite + React Native</title>
        </Head>
      )}
      <Slot />
    </View>
  );
}
