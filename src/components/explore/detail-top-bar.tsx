import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

type DetailTopBarProps = {
  title: string;
};

export default function DetailTopBar({ title }: DetailTopBarProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} hitSlop={10}>
        <ArrowLeft size={30} color="white" />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 28,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});