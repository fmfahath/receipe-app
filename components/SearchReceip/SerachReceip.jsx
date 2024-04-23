import { View, Text, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export function SearchReceip() {
    return (
        <View>
            <TextInput
                placeholder="Search Receip.."
                style={{
                    padding: 10,
                    backgroundColor: "#fff",
                    width: "100%",
                    height: 50,
                    borderColor: "#ddd",
                    borderWidth: 2,
                    borderRadius: 8,
                    paddingHorizontal: 15,
                    fontSize: 16,
                    color: "#333"
                }}>
            </TextInput>
        </View>
    )
}