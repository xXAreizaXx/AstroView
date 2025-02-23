// React & React Native
import { type ReactNode } from "react";
import { Pressable, View, type ViewStyle } from "react-native";

// Components
import Typography from "@components/Typography";

// Constants
import COLORS from "@constants/colors";

// Styles
import { styles } from "./styled";

// Types
type TButtonProps = {
    className?: ViewStyle;
    icon?: ReactNode;
    isDisabled?: boolean;
    isIconOnly?: boolean;
    onPress: VoidFunction;
    text?: string;
    variant?: "primary" | "secondary";
};

export default function Button(props: TButtonProps) {
    // Props
    const { className, icon, isDisabled, isIconOnly, onPress, text, variant = "primary" } = props;

    // Styles
    const buttonStyles = [
        className,
        isDisabled && variant === "primary" ? styles.disabled : styles[variant],
        isIconOnly && styles.iconOnly,
        styles.base,
    ];

    const textColor = isDisabled
        ? COLORS.text.placeholder
        : variant === "primary"
            ? COLORS.button.primary.text
            : COLORS.button.secondary.text;

    return (
        <Pressable
            onPress={!isDisabled ? onPress : undefined}
            style={({ pressed }) => [
                ...buttonStyles,
                pressed && !isDisabled && styles.pressed,
            ]}
        >
            {isIconOnly ? icon : (
                <View style={styles.text}>
                    {icon}
                    {text && <Typography color={textColor}>{text}</Typography>}
                </View>
            )}
        </Pressable>
    );
}
