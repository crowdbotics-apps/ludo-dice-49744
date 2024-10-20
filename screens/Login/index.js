import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";

const NewProfileScreen = () => {
  const user = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    photo: "https://tinyurl.com/42evm3m3"
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{
        uri: user.photo
      }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center"
  },
  profileContainer: {
    alignItems: "center"
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  email: {
    fontSize: 18,
    color: "#888"
  }
});
export default NewProfileScreen;