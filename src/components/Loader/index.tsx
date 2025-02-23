// React & React Native
import { View } from "react-native";
import { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";

// Styles
import { styles } from "./styled";

export default function Loader() {
    // Ref
    const animation = useRef<LottieView>(null);

    // Effects
    useEffect(() => {
        animation.current?.play();
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                ref={animation}
                source={require("../../../assets/animations/loader.json")}
                style={styles.lottie}
            />
        </View>
    );
}