import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const router = useRouter();
  const [LoggedIn, setLoggedIn] = useState(false);

  const UserLoggedIn = async () => {
    try {
      const value = await AsyncStorage.getItem("userEmail");
      // console.log("Retrieved user email:", value);
      if (value !== null) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (e) {
      console.log("Error retrieving data", e);
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    UserLoggedIn();
  }, []);

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
        {LoggedIn ? (
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.navigate("Home")}
              className="py-3 bg-yellow-400 mx-7 rounded-xl"
            >
              <Text className="text-xl font-bold text-center text-gray-700">
                Go to Home
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="space-y-4">
            <TouchableOpacity
              activeOpacity={0.8}
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
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => router.navigate("Login")}
              >
                <Text className="font-semibold text-yellow-400"> Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
