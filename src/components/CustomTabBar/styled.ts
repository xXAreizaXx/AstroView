// React & React Native
import { StyleSheet } from "react-native";

// Constants
import COLORS from "@constants/colors";

// Styles
export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.tabBar.background,
    },
    focused: {
        alignItems: "center",
        backgroundColor: COLORS.tabBar.active,
        borderRadius: 20,
        flexDirection: "row",
        gap: 6,
        height: 40,
        justifyContent: "center",
        padding: 6,
        width: 100,
    },
});