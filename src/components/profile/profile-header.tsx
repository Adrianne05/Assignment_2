import { Menu, Plus } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

type ProfileHeaderProps = {
  username: string;
};

export default function ProfileHeader({ username }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <Plus size={28} color="black" />
      <Text style={styles.username}>{username}</Text>
      <Menu size={28} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  username: {
    fontSize: 28,
    fontWeight: "bold",
  },
});