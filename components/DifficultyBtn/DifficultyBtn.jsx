import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function DifficultyBtn({ data }) {
    return (
        <View style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
            marginVertical: 20,
        }}>
            {data.map((item) => {
                return (
                    <TouchableOpacity key={item.name} style={{
                        backgroundColor: item.isActive ? "#129575" : "white",
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 5,
                    }}>
                        <Text style={{ color: item.isActive ? "white" : "black" }}>{item.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}