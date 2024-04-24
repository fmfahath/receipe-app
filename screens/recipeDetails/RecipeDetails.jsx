import { View, Text, Image } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';

export function RecipeDetails({ route, navigation }) {

    const { name, image, description } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#129575" }}>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        // navigation.navigate("Dashboard");
                        navigation.goBack();
                    }}
                >
                    <MaterialIcons name="arrow-back-ios-new" size={24} color="white" style={{ marginTop: 20, marginLeft: 5 }} />
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "white",
                marginTop: 150,
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                paddingHorizontal: 20,

            }}>
                <View style={{ alignItems: "center" }}>
                    <Image source={image} style={{
                        height: 170,
                        width: 170,
                        marginTop: -100,
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