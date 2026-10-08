import Story from "@/components/instagram/story";
import { FlatList, StyleSheet } from "react-native";

const stories = ["nba", "spurs", "sc30", "stephoncastle", "kyrie", "wemby0"];

export default function StoryList() {
  return (
    <FlatList
      data={stories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Story username={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 16,
  },
});
