import { Image, StyleSheet, Text, View } from "react-native";
import pfp from "../../../assets/images/default_pfp.png";
import post from "../../../assets/images/nba_post.jpg";

export default function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={pfp} style={styles.pfp} resizeMode="contain" />

        <View>
          <Text style={styles.username}>nbaonespn</Text>
          <Text style={styles.subtitle}>nbaonespn Original audio</Text>
        </View>
      </View>

      <Image source={post} style={styles.post} resizeMode="cover" />
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

  post: {
    width: "100%",
    height: 500,
  },
});
