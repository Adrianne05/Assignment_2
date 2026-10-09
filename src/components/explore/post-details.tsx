import pfp from "@/assets/images/default_pfp.png";
import type { ExplorePost } from "@/types/post";
import { Music } from "lucide-react-native";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

type PostDetailsProps = {
  post: ExplorePost;
};

export default function PostDetails({ post }: PostDetailsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.userRow}>
        <Image source={pfp} style={styles.avatar} />

        <View style={styles.userInfo}>
          <Text style={styles.username}>{post.username}</Text>
          <View style={styles.audioRow}>
            <Music size={16} color="white" />
            <Text style={styles.audio} numberOfLines={1}>
              {post.audio}
            </Text>
          </View>
        </View>

        <View style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </View>
      </View>

      <Text style={styles.caption} numberOfLines={1}>
        {post.caption}
      </Text>

      <TextInput
        style={styles.commentInput}
        placeholder="Add comment..."
        placeholderTextColor="#ffffff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 10,
    gap: 12,
    flexShrink: 0,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingRight: 56,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: "#e1306c",
  },
  userInfo: {
    flex: 1,
  },
  username: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  audioRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  audio: {
    color: "white",
    fontSize: 15,
    flexShrink: 1,
  },
  followButton: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 8,
  },
  followText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  caption: {
    color: "#dddddd",
    fontSize: 16,
    paddingRight: 56,
  },
  commentInput: {
    height: 52,
    borderRadius: 26,
    backgroundColor: "#1c212b",
    paddingHorizontal: 20,
    color: "white",
    fontSize: 16,
  },
});
