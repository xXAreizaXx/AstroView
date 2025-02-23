// React & React Native
import { TextInput, type TextInputProps, View } from "react-native";

// Constants
import COLORS from "@constants/colors";

// Styles
import { styles } from "./styled";

interface TTextFieldProps extends TextInputProps {
    icon?: JSX.Element;
    name: string;
    value?: string;
}

export function TextField(props: TTextFieldProps) {
    // Props
    const { name, icon, onChangeText, value, ...rest } = props;

    return (
        <View style={styles.inputContainer}>
            <TextInput
                {...rest}
                onChangeText={onChangeText}
                placeholderTextColor={COLORS?.text?.primary}
                style={styles.input}
                value={value}
            />
            {icon && <View style={styles.iconContainer}>{icon}</View>}
        </View>
    );
}
