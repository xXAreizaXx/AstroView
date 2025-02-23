// Expo
import { useRouter } from "expo-router";

// React & React Native
import { Pressable } from "react-native";

// Components
import Logo from "@components/Logo";
import Typography from "@components/Typography";

// Styles
import { styles } from "./styled";

export default function Header() {
    const router = useRouter();

    const handlePress = () => {
        router.push("/(tabs)");
    };

    return (
        <Pressable style={styles.header} onPress={handlePress}>
            <Logo />
            <Typography variant="title">AstroView</Typography>
        </Pressable>
    );
}