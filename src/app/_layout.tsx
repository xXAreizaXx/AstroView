// Expo
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

// React & React Native
import Loader from "@components/Loader";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
    // Hooks
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        MuseoSans: require("../../assets/fonts/MuseoSans.ttf"),
    });

    // Effects
    useEffect(() => {
        if (!loaded) return;

        SplashScreen.hideAsync();
    }, [loaded]);

    if (!loaded) return <Loader />;

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="(tabs)" />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </QueryClientProvider>
    );
}
