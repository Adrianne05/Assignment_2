import ProfileHeader from "@/components/profile/profile-header";
import ProfileStats from "@/components/profile/profile-stats";
import ProfileTabs from "@/components/profile/profile-tabs";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileHeader username="zadrimvp" />
        <ProfileStats posts={7} followers={5} following={2005} />

        <View style={styles.actionRow}>
          <Pressable style={styles.profileButton}>
            <Text style={styles.profileText}>Edit profile</Text>
          </Pressable>
          <Pressable style={styles.profileButton}>
            <Text style={styles.profileText}>Share profile</Text>
          </Pressable>
        </View>

        <View style={styles.highlights} />
        <ProfileTabs />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  actionRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 10,
  },
  profileButton: {
    flex: 1,
    height: 45,
    backgroundColor: "#f1f4f6",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  profileText: {
    fontSize: 16,
    fontWeight: "600",
  },
  highlights: {
    height: 100,
  },
});