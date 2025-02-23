// React & React Native
import { StyleSheet } from "react-native";

// Constants
import COLORS from "@constants/colors";

// Styles
export const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        backgroundColor: COLORS?.grayscale?.white,
        borderColor: COLORS?.button?.primary?.background,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: "row",
        flex: 1,
        paddingHorizontal: 10,
    },
    input: {
        alignItems: "center",
        color: COLORS?.button?.primary?.text,
        flexDirection: "row",
        flex: 1,
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 10,
        paddingVertical: 14,
    },
    iconContainer: {
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    }
});
