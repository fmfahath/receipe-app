import { View, Text, Image } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';


export function RecipeDetails({ route, navigation }) {

    const { name, image, description, time, difficulty, calories, ingredients, steps } = route.params;

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
                {/* image & description */}
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
                        fontSize: 15,
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: 20

                    }}>{description}
                    </Text>
                </View>

                <ScrollView>
                    {/* min & medium & calories */}
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 12,
                        marginTop: 20
                    }}>
                        <View style={{
                            height: 90,
                            width: 90,
                            paddingVertical: 10,
                            borderRadius: 10,
                            alignItems: "center",
                            backgroundColor: "#129575"
                        }}>
                            <Text style={{ fontSize: 30 }}>⏱️</Text>
                            <Text style={{ color: "white" }}>{time}</Text>
                        </View>
                        <View style={{
                            height: 90,
                            width: 90,
                            paddingVertical: 10,
                            borderRadius: 10,
                            alignItems: "center",
                            backgroundColor: "#129575"
                        }}>
                            <Text style={{ fontSize: 30 }}>🍜</Text>
                            <Text style={{ color: "white" }}>{difficulty}</Text>
                        </View>
                        <View style={{
                            height: 90,
                            width: 90,
                            paddingVertical: 10,
                            borderRadius: 10,
                            alignItems: "center",
                            backgroundColor: "#129575"
                        }}>
                            <Text style={{ fontSize: 30 }}>🔥</Text>
                            <Text style={{ color: "white" }}>{calories}</Text>
                        </View>
                    </View>

                    {/* ingredients */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                        }}>Ingredients</Text>
                        <View style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: 10, marginTop: 10
                        }}>

                            {ingredients.map((item, index) => {
                                return (
                                    <View key={index} style={{
                                        paddingVertical: 10,
                                        paddingHorizontal: 15,
                                        backgroundColor: "#129575",
                                        borderRadius: 20,
                                    }}>
                                        <Text style={{ color: "white" }}>{item}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>

                    {/* Steps */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            marginBottom: 10
                        }}>Steps</Text>

                        <View style={{ marginBottom: 20 }}>
                            {/* <ScrollView> */}
                            {steps.map((item, index) => {
                                return (
                                    <Text key={index} style={{
                                        marginVertical: 5
                                    }}>{index + 1}. {item}</Text>
                                )
                            })}
                            {/* </ScrollView> */}
                        </View>
                    </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    )
}