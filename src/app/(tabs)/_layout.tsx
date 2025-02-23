// Expo
import { Tabs } from "expo-router";

// React & React Native
import { StyleSheet } from "react-native";

// Context

// Components
import CustomTabBar from "@components/CustomTabBar";

// Constants
import COLORS from "@constants/colors";
import { TabBarList } from "@constants/tabBar";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles?.tabBar
        }}>
            {TabBarList?.map((tab) => (
                <Tabs.Screen
                    key={tab?.path}
                    name={tab?.path}
                    options={{
                        ...(!tab?.display && { href: null }),
                        ...(!tab?.display && { tabBarStyle: { display: "none" } }),
                        tabBarIcon: (props) => <CustomTabBar title={tab?.title} name={tab?.name} {...props} />,
                        title: tab?.title,
                    }}
                />
            ))}
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        alignItems: "center",
        backgroundColor: COLORS.tabBar.background,
        height: 80,
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingTop: 20,
    }
});
