import pfp from "@/assets/images/default_pfp.png";
import { Image, StyleSheet, Text, View } from "react-native";

type ProfileStatsProps = {
  posts: number;
  followers: number;
  following: number;
};

type StatProps = {
  value: number;
  label: string;
};

function Stat({ value, label }: StatProps) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statNumber}>{value.toString()}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export default function ProfileStats({
  posts,
  followers,
  following,
}: ProfileStatsProps) {
  return (
    <View style={styles.container}>
      <Image source={pfp} style={styles.profilePicture} resizeMode="cover" />

      <View style={styles.stats}>
        <Stat value={posts} label="posts" />
        <Stat value={followers} label="followers" />
        <Stat value={following} label="following" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  profilePicture: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 15,
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    marginTop: 2,
  },
  statLabel: {
    fontSize: 16,
    marginTop: 2,
  },
});