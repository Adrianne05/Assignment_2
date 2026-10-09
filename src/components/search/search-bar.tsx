import { Bookmark, Search } from "lucide-react-native";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.row}>
      <View style={styles.bar}>
        <Search size={22} color="#777777" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#777777"
        />
      </View>
      <Bookmark size={28} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginTop: 10,
    gap: 14,
  },
  bar: {
    flex: 1,
    height: 45,
    backgroundColor: "#f1f1f1",
    borderRadius: 24,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
});
