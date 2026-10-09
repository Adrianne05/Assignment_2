import pfp from "@/assets/images/default_pfp.png";
import type { FeedPost } from "@/types/post";
import { Image, StyleSheet, Text, View } from "react-native";

type PostCardProps = {
  post: FeedPost;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={pfp} style={styles.pfp} resizeMode="contain" />

        <View>
          <Text style={styles.username}>{post.username}</Text>
          <Text style={styles.subtitle}>{post.audio}</Text>
        </View>
      </View>

      <Image source={post.image} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  pfp: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "black",
  },
  username: {
    fontSize: 17,
    fontWeight: "700",
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 14,
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: 500,
  },
});