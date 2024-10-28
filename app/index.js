import { useRouter } from "expo-router";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 justify-center bg-blue-500">
      <View className="flex-1 flex justify-around my-4">
        <Text className="text-4xl font-bold text-white text-center">
          Let's Get Started
        </Text>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/Book.png")}
            style={{ width: 350, height: 350 }}
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
            onPress={() => router.navigate("Signup")}
            className="py-3 bg-yellow-400 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-white font-semibold">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.navigate("Login")}>
              <Text className="font-semibold text-yellow-400"> Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
