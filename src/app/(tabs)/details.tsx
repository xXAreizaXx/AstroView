// Expo
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useLocalSearchParams } from "expo-router";

// React & React Native
import { useQuery } from "@tanstack/react-query";
import { ScrollView, StyleSheet, View } from "react-native";

// Components
import Header from "@components/Header";
import Loader from "@components/Loader";
import Typography from "@components/Typography";

// Services
import { getPlanet } from "@services/planets";

// Constants
import COLORS from "@constants/colors";

// Utils
import { formatNumber } from "@utils/functions";

export default function PlanetDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    
    const { data: planet, isLoading } = useQuery({
        queryKey: ["planet", id],
        queryFn: () => getPlanet(id),
        enabled: !!id,
    });

    if (isLoading) return <Loader />;

    const renderInfoItem = (icon: keyof typeof Ionicons.glyphMap, label: string, value: string | number) => (
        <View style={styles.infoItem}>
            <View style={styles.iconContainer}>
                <Ionicons name={icon} size={24} color={COLORS.text.primary} />
            </View>
            <View style={styles.infoTextContainer}>
                <Typography variant="body" color={COLORS.text.secondary}>{label}</Typography>
                <Typography variant="body" fontWeight="500">{value}</Typography>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.content}>
                <Typography variant="title" fontWeight="900" className={styles.name}>
                    {planet.englishName}
                </Typography>
                {planet.alternativeName && (
                    <Typography variant="body" color={COLORS.text.secondary} className={styles.alternativeName}>
                        También conocido como: {planet.alternativeName}
                    </Typography>
                )}
                
                <View style={styles.infoSection}>
                    <Typography variant="subtitle" fontWeight="700" className={styles.sectionTitle}>
                        Características Físicas
                    </Typography>
                    {renderInfoItem("planet", "Tipo de Cuerpo", planet.bodyType)}
                    {renderInfoItem("resize", "Radio Medio", `${formatNumber(planet.meanRadius)} km`)}
                    {renderInfoItem("speedometer", "Gravedad", `${formatNumber(planet.gravity)} m/s²`)}
                    {renderInfoItem("thermometer", "Temperatura Media", `${formatNumber(planet.avgTemp)}°K`)}
                    {renderInfoItem("scale", "Densidad", `${formatNumber(planet.density)} g/cm³`)}
                    {planet.mass && renderInfoItem("fitness", "Masa", `${formatNumber(planet.mass.massValue)}e${planet.mass.massExponent} kg`)}
                </View>

                <View style={styles.infoSection}>
                    <Typography variant="subtitle" fontWeight="700" className={styles.sectionTitle}>
                        Información Orbital
                    </Typography>
                    {renderInfoItem("ellipse", "Afelio", `${formatNumber(planet.aphelion)} km`)}
                    {renderInfoItem("git-branch", "Inclinación", `${formatNumber(planet.inclination)}°`)}
                    {renderInfoItem("sync", "Excentricidad", formatNumber(planet.eccentricity))}
                    {renderInfoItem("time", "Órbita Sideral", `${formatNumber(planet.sideralOrbit)} días`)}
                    {renderInfoItem("refresh-circle", "Rotación Sideral", `${formatNumber(planet.sideralRotation)} horas`)}
                </View>

                {planet.discoveredBy && (
                    <View style={styles.infoSection}>
                        <Typography variant="subtitle" fontWeight="700" className={styles.sectionTitle}>
                            Información del Descubrimiento
                        </Typography>
                        {renderInfoItem("person", "Descubierto Por", planet.discoveredBy)}
                        {planet.discoveryDate && renderInfoItem("calendar", "Fecha de Descubrimiento", planet.discoveryDate)}
                    </View>
                )}

                {planet.moons?.length > 0 && (
                    <View style={styles.infoSection}>
                        <Typography variant="subtitle" fontWeight="700" className={styles.sectionTitle}>
                            Lunas
                        </Typography>
                        {renderInfoItem("moon", "Número de Lunas", planet.moons.length)}
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background.primary,
        flex: 1,
        gap: 10,
        paddingHorizontal: 20,
        paddingTop: Constants?.statusBarHeight + 10,
    },
    content: {
        padding: 16,
    },
    name: {
        marginBottom: 8,
    },
    alternativeName: {
        marginBottom: 16,
    },
    infoSection: {
        marginTop: 24,
    },
    sectionTitle: {
        marginBottom: 16,
    },
    infoItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.background.secondary,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    infoTextContainer: {
        flex: 1,
    },
});