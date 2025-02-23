// React & React Native
import { View } from "react-native";

// Components
import Typography from "@components/Typography";

// Constants
import COLORS from "@constants/colors";
import { TabBarIcons } from "@constants/tabBar";

// Styles
import { styles } from "./styled";

export default function CustomTabBar(props: TCustomTabBarProps) {
    // Props
    const { focused } = props;

    return (
        <View style={[styles?.container, focused && styles.focused]}>
            {TabBarIcons[props?.name](props)}
            {focused && <Typography color={COLORS?.background?.primary} variant="caption">
                {props?.title}
            </Typography>}
        </View>
    );
}