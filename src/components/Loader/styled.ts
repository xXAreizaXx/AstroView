// React & React Native
import COLORS from "@constants/colors";
import { StyleSheet } from "react-native";

// Styles
export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: COLORS?.background?.primary,
        flex: 1,
        justifyContent: "center",
    },
    lottie: {
        height: 200,
        width: 200,
    }
});