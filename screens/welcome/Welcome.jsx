import { View, Text, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeImg from '../../assets/welcome.png';


export function Welcome() {
    return (
        <ImageBackground source={WelcomeImg} style={{ flex: 1 }}>
            <SafeAreaView>
                <Text>Welcome Screen</Text>
            </SafeAreaView>
        </ImageBackground>
    )
}