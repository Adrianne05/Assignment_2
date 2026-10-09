import type { ExplorePost } from "@/types/post";
import {
  AlignJustify,
  Bookmark,
  Heart,
  MessageCircle,
  Repeat2,
  Send,
} from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import ActionIcon from "./action-icon";

type SideIconsProps = {
  post: ExplorePost;
};

export default function SideIcons({ post }: SideIconsProps) {
  return (
    <View style={styles.container}>
      <ActionIcon icon={Heart} count={post.likes} />
      <ActionIcon icon={MessageCircle} count={post.comments} />
      <ActionIcon icon={Repeat2} count={post.reposts} />
      <ActionIcon icon={Send} count={post.shares} />
      <ActionIcon icon={Bookmark} />
      <ActionIcon icon={AlignJustify} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 10,
    bottom: 120,
    alignItems: "center",
    gap: 18,
  },
});
