// Expo
import { Ionicons } from "@expo/vector-icons";

// React & React Native
import { Pressable, View } from "react-native";

// Components
import Typography from "@components/Typography";

// Constants
import COLORS from "@constants/colors";

// Styles
import { useRouter } from "expo-router";
import { styles } from "./styled";

export default function PlanetCard({ planet }: { planet: TPlanet }) {
    const router = useRouter();

    const handlePress = () => {
        router.push(`/(tabs)/details?id=${planet.id}`);
    };
    
    return (
        <Pressable onPress={handlePress} style={styles.card}>
            <Typography variant="title" fontWeight="900">
                {planet.englishName}
            </Typography>
            {planet.alternativeName && (
                <Typography 
                    variant="body" 
                    color={COLORS.text.secondary}
                    className={styles.altName}
                >
                    ({planet.alternativeName})
                </Typography>
            )}

            <View style={styles.infoContainer}>
                <InfoItem
                    icon="planet"
                    label="Radio"
                    value={`${planet.meanRadius.toLocaleString()} km`}
                />
                <InfoItem
                    icon="thermometer"
                    label="Temp. Media"
                    value={`${planet.avgTemp}°K`}
                />
                <InfoItem
                    icon="fitness"
                    label="Gravedad"
                    value={`${planet.gravity} m/s²`}
                />
            </View>

            <View style={styles.orbitInfo}>
                <InfoItem
                    icon="ellipsis-horizontal"
                    label="Periodo Orbita"
                    value={`${planet.sideralOrbit.toFixed(2)} days`}
                />
                <InfoItem
                    icon="sync"
                    label="Rotación"
                    value={`${planet.sideralRotation.toFixed(2)} hours`}
                />
            </View>

            {planet.moons && (
                <View style={styles.moonInfo}>
                    <Ionicons name="moon" size={20} color={COLORS.text.primary} />
                    <Typography variant="body" className={styles.moonText}>
                        Moons: {planet.moons.length}
                    </Typography>
                </View>
            )}
        </Pressable>
    );
}

const InfoItem = ({ icon, label, value }: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string }) => (
    <View style={styles.infoItem}>
        <Ionicons name={icon} size={20} color={COLORS.text.primary} />
        <Typography variant="caption" color={COLORS.text.secondary}>
            {label}
        </Typography>
        <Typography variant="body">
            {value}
        </Typography>
    </View>
);