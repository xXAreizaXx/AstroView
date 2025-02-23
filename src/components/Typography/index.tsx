// React & React Native
import { type ReactNode } from "react";
import { Text, type TextStyle } from "react-native";

// Constants
import COLORS from "@constants/colors";

// Styles
import { styles } from "./styled";

// Types
type TTypography = {
  align?: "left" | "center" | "right" | "justify";
  children: ReactNode;
  className?: TextStyle;
  color?: string;
  fontWeight?: "normal" | "bold" | "500" | "700" | "900";
  variant?: "title" | "subtitle" | "body" | "caption";
};

export default function Typography(props: TTypography) {
    // Props
    const { align, children, className, color = COLORS?.text?.primary, fontWeight = "normal", variant = "body" } = props;

    // Functions
    const capitalize = (text: string) => text[0].toUpperCase() + text.slice(1);

    // Styles Array
    const textStyles = [
        { color },
        { fontWeight },
        align ? styles[`align${capitalize(align)}` as keyof typeof styles] : null,
        className,
        styles?.root,
        styles[variant],
    ]?.filter(Boolean);

    return <Text style={textStyles}>{children}</Text>;
}

