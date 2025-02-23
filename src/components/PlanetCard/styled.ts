// React & React Native
import { StyleSheet } from "react-native";

// Constants
import COLORS from "@constants/colors";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.background.secondary,
        borderRadius: 16,
        elevation: 5,
        gap: 8,
        marginBottom: 16,
        padding: 16,
        shadowColor: COLORS.grayscale.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    altName: {
        fontStyle: "italic",
        marginBottom: 16,
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    infoItem: {
        alignItems: "center",
        flex: 1,
    },
    orbitInfo: {
        borderTopColor: COLORS.background.primary,
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 16,
    },
    moonInfo: {
        alignItems: "center",
        borderTopColor: COLORS.background.primary,
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 16,
        paddingTop: 16,
    },
    moonText: {
        marginLeft: 8,
    },
});