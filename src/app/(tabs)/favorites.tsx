// Expo
import Constants from "expo-constants";

// React & React Native
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import { FlatList, StyleSheet, View } from "react-native";

// Components
import Header from "@components/Header";
import Loader from "@components/Loader";
import PlanetCard from "@components/PlanetCard";
import Typography from "@components/Typography";

// Services
import { getPlanet } from "@services/planets";

// Constants
import COLORS from "@constants/colors";

export default function FavoritesScreen() {
    // Query
    const { data: favoriteIds = [], isLoading: isLoadingIds } = useQuery({
        queryKey: ["favoriteIds"],
        queryFn: async () => {
            const favorites = await AsyncStorage.getItem("favorites");
            return favorites ? JSON.parse(favorites) : [];
        },
        refetchInterval: 1000,
    });

    const { data: planets = [], isLoading: isLoadingPlanets } = useQuery({
        queryKey: ["favorites", favoriteIds],
        queryFn: async () => {
            const planetPromises = favoriteIds.map((id: string) => getPlanet(id));
            return Promise.all(planetPromises);
        },
        enabled: favoriteIds.length > 0,
    });

    const isLoading = isLoadingIds || isLoadingPlanets;

    if (isLoading) return <Loader />;

    if (!isLoading && favoriteIds.length === 0) {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.emptyContainer}>
                    <Typography variant="subtitle" color={COLORS.text.secondary}>
                        No tienes planetas favoritos aún
                    </Typography>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={planets}
                renderItem={({ item }) => <PlanetCard planet={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background.primary,
        flex: 1,
        gap: 10,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    listContent: {
        gap: 16,
        paddingVertical: 16,
    },
});
