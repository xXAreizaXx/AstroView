// Expo
import { Feather, Ionicons } from "@expo/vector-icons";

// Constants
import COLORS from "./colors";

export const TabBarIcons: Record<string, (props: TCustomTabBarProps) => JSX.Element> = {
    planets: ({ focused }) => (
        <Ionicons name="planet-outline" size={20} color={focused ? COLORS?.background?.primary : COLORS?.tabBar?.active} />
    ),
    favorites: ({ focused }) => (
        <Feather name="heart" size={20} color={focused ? COLORS?.background?.primary : COLORS?.tabBar?.active} />
    ),
};

export const TabBarList: TTabBarList[] = [
    {
        display: true,
        name: "planets",
        path: "index",
        title: "Planetas"
    },
    {
        display: false,
        name: "details",
        path: "details",
        title: "Detalles"
    },
    {
        display: true,
        name: "favorites",
        path: "favorites",
        title: "Favoritos"
    },
];