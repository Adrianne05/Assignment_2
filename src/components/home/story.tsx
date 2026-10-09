import pfp from "@/assets/images/default_pfp.png";
import { Image, StyleSheet, Text, View } from "react-native";

type StoryProps = {
  username: string;
};

export default function Story({ username }: StoryProps) {
  return (
    <View style={styles.container}>
      <Image source={pfp} style={styles.pfp} resizeMode="contain" />

      <Text style={styles.username}>{username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  pfp: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  username: {
    fontSize: 14,
    marginTop: 5,
  },
});
