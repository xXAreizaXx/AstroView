// React & React Native
import { View } from "react-native";

// Components
import Logo from "@components/Logo";
import Typography from "@components/Typography";

// Styles
import { styles } from "./styled";

export default function Header() {
    return (
        <View style={styles.header}>
            <Logo />
            <Typography variant="title">AstroView</Typography>
        </View>
    );
}