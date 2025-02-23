// Expo
import { Image } from "expo-image";

// React & React Native
import { View } from "react-native";

// Components
import Typography from "@components/Typography";

// Constants
import COLORS from "@constants/colors";

// Styles
import { styles } from "./styled";

function ImgInvoice() {
    return (
        <Image
            contentFit="contain"
            source={require("../../../assets/images/emptyInvoice.png")}
            style={styles?.image}
            transition={1000}
        />
    );
}

export function EmptyInvoices() {
    return (
        <View style={styles?.container}>
            <ImgInvoice />
            <Typography color={COLORS?.primary?.spaceBlue} variant="title">Sin facturas disponibles</Typography>
            <Typography align="center" variant="body">Intenta más tarde o contáctanos{"\n"}si crees que es un error</Typography>
        </View>
    );
}