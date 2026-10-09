import Story from "@/components/home/story";
import { FlatList, StyleSheet } from "react-native";

type StoryListProps = {
  stories: string[];
};

export default function StoryList({ stories }: StoryListProps) {
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