import { View, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

export function RecipeDetails({ route }) {

    const { name, image, description } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#129575" }}>
            <View>
                <Text>Back-</Text>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "white",
                marginTop: 150,
                borderTopLeftRadius: 70,
                borderTopRightRadius: 70,
                paddingHorizontal: 20,

            }}>
                <View style={{ alignItems: "center" }}>
                    <Image source={image} style={{
                        height: 170,
                        width: 170,
                        marginTop: -50,
                        marginBottom: 20
                    }} />
                    <Text style={{
                        color: "#097a5f",
                        fontSize: 25,
                        fontWeight: "bold",
                        marginBottom: 10
                    }}>{name}
                    </Text>
                    <Text style={{
                        color: "#636363",
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}>{description}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}