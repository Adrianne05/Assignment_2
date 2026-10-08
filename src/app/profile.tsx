import {
    Grid3x3,
    Menu,
    PlaySquare,
    Plus,
    Repeat2,
    UserSquare,
} from "lucide-react-native";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pfp from "../../assets/images/default_pfp.png";

export default function ProfilePage() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Pressable>
            <Plus size={28} color={"black"} />
          </Pressable>
          <Text style={styles.username}>zadrimvp</Text>
          <Menu size={28} color={"black"} />
        </View>

        <View style={styles.profileInfo}>
          <Image
            source={pfp}
            style={styles.profilePicture}
            resizeMode="cover"
          />

          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>7</Text>
              <Text style={styles.statLabel}>posts</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>followers</Text>
            </View>

            <View style={styles.stat}>
              <Text style={styles.statNumber}>2005</Text>
              <Text style={styles.statLabel}>following</Text>
            </View>
          </View>
        </View>

        <View style={styles.actioRow}>
          <Pressable style={styles.profileButton}>
            <Text style={styles.profileText}>Edit profile</Text>
          </Pressable>

          <Pressable style={styles.profileButton}>
            <Text style={styles.profileText}>Share profile</Text>
          </Pressable>
        </View>

        <View style={styles.highlights}></View>

        <View style={styles.tabs}>
          <Pressable style={styles.tab}>
            <Grid3x3 size={27} color="black" />
          </Pressable>

          <Pressable style={styles.tab}>
            <PlaySquare size={27} color="black" />
          </Pressable>

          <Pressable style={styles.tab}>
            <Repeat2 size={27} color="black" />
          </Pressable>

          <Pressable style={styles.tab}>
            <UserSquare size={27} color="black" />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
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

  profileInfo: {
    backgroundColor: "blue",
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
    backgroundColor: "red",
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

  profileButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },

  highlights: {
    height: 100,
  },

  tabs: {
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
