import { StyleSheet, Text, View} from "react-native";

export default function Story() {
    return (
        <View style = {styles.circle}>
            <Text>Story</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
        backgroundColor: "black",
        width: 80,
        height: 80,
        borderRadius: 40


    }
});