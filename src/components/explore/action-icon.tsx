import type { LucideIcon } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

type ActionIconProps = {
  icon: LucideIcon;
  count?: number;
};

export default function ActionIcon({ icon: Icon, count }: ActionIconProps) {
  return (
    <View style={styles.container}>
      <Icon size={34} color="white" />
      {count !== undefined && (
        <Text style={styles.count}>{count.toString()}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  count: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 4,
  },
});
