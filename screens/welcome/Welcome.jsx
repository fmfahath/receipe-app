import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
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
                    <Image source={Logo} style={{ marginBottom: 20 }}></Image>
                    <Text style={{
                        color: "white",
                        fontSize: 22,
                        marginBottom: 20,
                    }}>1000K+ Premium Receipies</Text>
                    <View style={{ marginVertical: 50 }}></View>
                    <Text style={{
                        color: "white",
                        fontSize: 50,
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: 10,
                    }}>Get{"\n"}Cooking</Text>
                    <Text style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: 300,
                        marginBottom: 30,
                    }}>Simple Way To Find Tasty Receipies</Text>
                    <TouchableOpacity style={{
                        color: "white",
                        backgroundColor: "#129575",
                        paddingVertical: 15,
                        paddingHorizontal: 25,
                        borderRadius: 10,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                    }}>
                        <Text style={{
                            color: "white",
                        }}>Start Cooking</Text>
                        <AntDesign name="arrowright" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}