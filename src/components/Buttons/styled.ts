// React & React Native
import { StyleSheet } from "react-native";

// Constants
import COLORS from "@constants/colors";

// Styles
export const styles = StyleSheet.create({
    base: {
        alignItems: "center",
        borderRadius: 40,
        flexDirection: "row",
        height: 45,
        justifyContent: "center",
        padding: 10,
    },
    disabled: {
        backgroundColor: COLORS.grayscale.mediumGray,
        opacity: 0.5,
    },
    iconOnly: {
        height: 50,
        width: 50,
    },
    pressed: {
        opacity: 0.9,
    },
    primary: {
        backgroundColor: COLORS.button.primary.background,
    },
    secondary: {
        backgroundColor: COLORS.button.secondary.background,
    },
    text: {
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    },
});
