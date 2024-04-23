import { View, Text, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeImg from '../../assets/welcome.png';
import Logo from '../../assets/logo.png';

export function Welcome() {
    return (
        <ImageBackground source={WelcomeImg} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image source={Logo}></Image>
                    <Text style={{ color: "white" }}>Welcome Screen</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}