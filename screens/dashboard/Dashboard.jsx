import { View, Text, Images } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TopBar } from "../../components/TopBar/TopBar";
import { SearchReceip } from "../../components/SearchReceip/SerachReceip";
import { DifficultyBtn } from "../../components/DifficultyBtn/DifficultyBtn";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
//Data
import { DifficultyLevels as DifficultyLevelsData } from '../../data';
import { recipeList as recipeListData } from '../../data';

export function Dashboard({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, padding: 10 }}>
            <TopBar />
            <SearchReceip />
            <DifficultyBtn data={DifficultyLevelsData} />
            <RecipeCard data={recipeListData} navigation={navigation} />
        </SafeAreaView>
    )
} 