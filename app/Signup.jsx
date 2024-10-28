import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const Signup = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSingup = () => {
    setErrorMessage(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert(
          "User registered successfully",
          "Please login to continue..."
        );
        setEmail("");
        setPassword("");
        setFullName("");
        router.navigate("Login");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <ScrollView className="flex-1 bg-blue-500">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => router.back()}
            className="bg-yellow-400 p-2 rounded-tr-2xl mt-2 ml-4 rounded-bl-2xl"
          >
            <AntDesign name="arrowleft" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/sign-up.png")}
            style={{ width: 180, height: 150 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8 pb-10"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 font-bold ml-4">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value={email}
            onChangeText={(value) => setEmail(value)}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Enter Email"
          />
          <Text className="text-gray-700 font-bold ml-4">Full Name</Text>
          <TextInput
            value={fullName}
            onChangeText={(value) => setFullName(value)}
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            keyboardType="email"
            placeholder="Enter Full Name"
          />
          <Text className="text-gray-700 font-bold ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            placeholder="Enter Password"
          />
        </View>
        <View>
          {errorMessage ? (
            <Text className="text-red-500 mb-4 text-sm text-center">
              {errorMessage}
            </Text>
          ) : null}
        </View>
        <TouchableOpacity
          onPress={handleSingup}
          className="py-3 bg-yellow-400 rounded-xl"
          activeOpacity={0.8}
        >
          <Text className="font-bold text-xl text-center text-gray-700">
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity
            className="p2 bg-gray-100 rounded-2xl"
            activeOpacity={0.6}
          >
            <Image
              source={require("../assets/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="p2 bg-gray-100 rounded-2xl"
            activeOpacity={0.6}
          >
            <Image
              source={require("../assets/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="p2 bg-gray-100 rounded-2xl"
            activeOpacity={0.6}
          >
            <Image source={require("../assets/fb.png")} className="w-10 h-10" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.navigate("Login")}
          >
            <Text className="font-semibold text-yellow-500"> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
