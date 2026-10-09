import DetailTopBar from "@/components/explore/detail-top-bar";
import PostDetails from "@/components/explore/post-details";
import SideIcons from "@/components/explore/side-icons";
import { explorePosts } from "@/data/explore";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExploreDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const post = explorePosts.find((p) => p.id === id);

  if (!post) return null;

  return (
    <SafeAreaView style={styles.container}>
      <DetailTopBar title="Explore" />

      <View style={styles.content}>
        <Image source={post.image} style={styles.media} resizeMode="cover" />
        <SideIcons post={post} />
        <PostDetails post={post} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0e14",
  },
  content: {
    flex: 1,
  },
  media: {
    width: "100%",
    flex: 1,
  },
});
