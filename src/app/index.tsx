import Header from "@/components/instagram/header";
import Post from "@/components/instagram/post";
import StoryList from "@/components/instagram/storylist";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StoryList />
      <Post />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
