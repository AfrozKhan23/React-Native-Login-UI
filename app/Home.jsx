import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userEmail");

      router.push("Login");
    } catch (e) {
      console.log("Error removing user email", e);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-blue-500">
      <View className="flex-1 justify-around  items-center pt-10">
        <Text className="text-3xl font-bold text-white">
          Welcome to Home Page
        </Text>
        <Image
          source={require("../assets/Home.png")}
          style={{ width: 300, height: 300, resizeMode: "cover" }}
        />
      </View>

      <View className="p-4">
        <TouchableOpacity
          onPress={handleLogout}
          className="py-3 bg-yellow-400 rounded-xl"
          activeOpacity={0.8}
        >
          <Text className="font-bold text-xl text-center text-gray-700">
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
