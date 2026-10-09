import HomeHeader from "@/components/home/home-header";
import PostCard from "@/components/home/post-card";
import StoryList from "@/components/home/story-list";
import { feedPosts } from "@/data/feed";
import { stories } from "@/data/stories";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoryList stories={stories} />
        {feedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});