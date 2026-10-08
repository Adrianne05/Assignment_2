import { Heart, Plus } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Plus size={28} color="#000000" />
      <Text style={styles.logo}>Instagram</Text>
      <Heart size={28} color="#000000" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
