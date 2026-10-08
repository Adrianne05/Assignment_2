import post from "@/assets/images/nba_post.jpg";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Post() {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.pfp}>
          <Text style={styles.profileLetter}>N</Text>
        </View>

        <View>
          <Text style={styles.username}>nbaonespn</Text>
          <Text style={styles.subtitle}>Made with Edits</Text>
        </View>
      </View>

      <Image source={post} style={styles.post} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
});
