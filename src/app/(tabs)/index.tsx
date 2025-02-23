// React & React Native
import { StyleSheet, View } from "react-native";

// Components
import Typography from "@components/Typography";

// Constants
import COLORS from "@constants/colors";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Typography color={COLORS.text.primary}>Home Screen</Typography>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: COLORS.background.primary,
        flex: 1,
        justifyContent: "center",
    },
});
