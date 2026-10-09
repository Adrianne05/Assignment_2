import { Grid3x3, PlaySquare, Repeat2, UserSquare } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";

const tabIcons = [Grid3x3, PlaySquare, Repeat2, UserSquare];

export default function ProfileTabs() {
  return (
    <View style={styles.container}>
      {tabIcons.map((Icon, index) => (
        <Pressable key={index} style={styles.tab}>
          <Icon size={27} color="black" />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
