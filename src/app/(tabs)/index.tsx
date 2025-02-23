// Expo
import { Feather, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";

// React & React Native
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Keyboard, StyleSheet, View } from "react-native";

// Components
import Header from "@components/Header";
import Loader from "@components/Loader";
import PlanetCard from "@components/PlanetCard";
import { TextField } from "@components/TextField";

// Services
import { getPlanets } from "@services/planets";

// Constants
import COLORS from "@constants/colors";

export default function HomeScreen() {
    // States
    const [order, setOrder] = useState<"asc" | "desc">("asc");
    const [search, setSearch] = useState("");
    const [searchText, setSearchText] = useState("");

    // Query
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ["planets", search, order],
        queryFn: ({ pageParam = 1 }) => getPlanets({ page: pageParam, search, order }),
        getNextPageParam: (lastPage, allPages) => lastPage?.length === 10 ? allPages.length + 1 : undefined,
        initialPageParam: 1,
    });

    // Functions
    const handleLoadMore = () => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
    };

    const handleSearch = useCallback((text: string) => {
        setSearchText(text);
    }, []);

    const toggleOrder = useCallback(() => {
        setOrder(prev => prev === "asc" ? "desc" : "asc");
    }, []);

    // Render
    const renderItem = useCallback(({ item }: { item: TPlanet }) => (
        <PlanetCard planet={item} />
    ), []);

    const renderFooter = () => {
        if (!isFetchingNextPage) return null;

        return (
            <View style={styles.footer}>
                <ActivityIndicator color={COLORS.text.primary} />
            </View>
        );
    };

    // Effects
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setSearch(searchText);
        }, 500);

        return () => clearTimeout(debounceTimer);
    }, [searchText]);

    if (isLoading) return <Loader />;

    const allPlanets = data?.pages.flat() ?? [];

    return (
        <View style={styles.container} onTouchStart={Keyboard.dismiss}>
            <Header />
            <View style={styles.searchContainer}>
                <TextField
                    name="search"
                    icon={<Feather name="search" size={20} color={COLORS?.button?.primary?.text} />}
                    onChangeText={handleSearch}
                    placeholder="Buscar planeta"
                    value={searchText}
                />
                <FontAwesome
                    style={styles.icon}
                    color={COLORS.button.primary.text}
                    name={order === "asc" ? "sort-alpha-asc" : "sort-alpha-desc"}
                    onPress={toggleOrder}
                    size={24}
                />
            </View>
            <FlatList
                contentContainerStyle={styles.listContent}
                data={allPlanets}
                keyboardShouldPersistTaps="never"
                keyExtractor={(item) => item.id}
                ListFooterComponent={renderFooter}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                renderItem={renderItem}
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
        paddingTop: Constants?.statusBarHeight + 10,
    },
    icon: {
        backgroundColor: COLORS.button.primary.background,
        borderRadius: 8,
        padding: 14,
    },
    searchContainer: {
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
    },
    footer: {
        alignItems: "center",
        marginVertical: 16,
    },
    listContent: {
        paddingBottom: Constants?.statusBarHeight + 10,
    },
});
