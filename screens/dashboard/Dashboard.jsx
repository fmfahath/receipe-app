import { View, Text, Images } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopBar } from "../../components/TopBar/TopBar";
import { SearchReceip } from "../../components/SearchReceip/SerachReceip";

//Data
import { DifficultyLevels as DifficultyLevelsData } from '../../data';
import { DifficultyBtn } from "../../components/DifficultyBtn/DifficultyBtn";

export function Dashboard() {
    return (
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
            <TopBar />
            <SearchReceip />
            <DifficultyBtn data={DifficultyLevelsData} />
        </SafeAreaView>
    )
}