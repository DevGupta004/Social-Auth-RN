import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const UserProfile = () => {
  const user = ({
    name: 'Dev Gupta',
    profilePicture: 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png',
    bio: 'Software Developer',
    email: 'er.devgupta007@gmail.com',
    phone: '+91 8400 7070 72',
});

  return (
    <View style={styles.container}>
      <Image style={styles.profilePicture} source={{ uri: user.profilePic }} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.phone}>{user.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 18,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 5,
  },
  phone: {
    fontSize: 16,
  },
});

export default UserProfile;