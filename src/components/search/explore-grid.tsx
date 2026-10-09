import type { ExplorePost } from "@/types/post";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

type ExploreGridProps = {
  posts: ExplorePost[];
};

type GridImageProps = {
  post: ExplorePost;
};

function GridImage({ post }: GridImageProps) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.imageWrapper}
      onPress={() => router.push(`/explore/${post.id}`)}
    >
      <Image source={post.image} style={styles.image} resizeMode="cover" />
    </Pressable>
  );
}

export default function ExploreGrid({ posts }: ExploreGridProps) {
  return (
    <View style={styles.grid}>
      {posts.map((post) => (
        <GridImage key={post.id} post={post} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },
  imageWrapper: {
    width: "33.33%",
  },
  image: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
});
