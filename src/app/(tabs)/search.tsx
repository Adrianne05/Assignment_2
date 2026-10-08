import { Bookmark, Search } from "lucide-react-native";
import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pfp from "../../../assets/images/default_pfp.png";
import post from "../../../assets/images/nba_post.jpg";

export default function SearchPage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Search size={22} color="#777777" />
            <TextInput
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="#777777"
            />
          </View>
          <Bookmark size={28} color="black" />
        </View>

        <View style={styles.grid}>
          <Image source={post} style={styles.image} resizeMode="cover" />
          <Image source={pfp} style={styles.image} resizeMode="cover" />
          <Image source={post} style={styles.image} resizeMode="cover" />
          <Image source={pfp} style={styles.image} resizeMode="cover" />
          <Image source={post} style={styles.image} resizeMode="cover" />
          <Image source={pfp} style={styles.image} resizeMode="cover" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 10,
  },

  searchBar: {
    height: 45,
    backgroundColor: "#f1f1f1",
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },

  image: {
    width: "33.33%",
    height: 130,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
});
