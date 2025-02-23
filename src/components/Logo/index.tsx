// Expo
import { Image } from "expo-image";

// Styles
import { styles } from "./styled";

export default function Logo() {
    return (
        <Image
            contentFit="contain"
            source={require("../../../assets/icons/logo.svg")}
            style={styles?.image}
            transition={1000}
        />
    );
}
