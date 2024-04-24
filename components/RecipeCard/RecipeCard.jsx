import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export function RecipeCard({ data }) {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                numColumns={2}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            flex: 1,
                            // borderColor: "#333",
                            // borderWidth: 2,
                            // borderRadius: 10,
                            paddingVertical: 10,
                            alignItems: "center",
                            margin: 5,

                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                        }}>

                            <Image source={item.image} style={{ height: 120 }} resizeMode="contain" />
                            <Text style={{ color: "#097a5f", fontWeight: "bold" }}>{item.name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}