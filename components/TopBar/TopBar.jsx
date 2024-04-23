import { View, Text, Image } from "react-native";
import Avatar from "../../assets/Avatar.png";

export function TopBar() {
    return (
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Hello Fahath</Text>
                <Text style={{ color: "#a9a9a9" }}>What are you cooking today?</Text>
            </View>
            <View>
                <Image source={Avatar}></Image>
            </View>
        </View>
    )
}