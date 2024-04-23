import { View, Text, Images } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopBar } from "../../components/TopBar/TopBar";

export function Dashboard() {
    return (
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
            <TopBar />
        </SafeAreaView>
    )
}