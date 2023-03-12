import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";
import UserProfile from "../Components/Profile/user-profile";
import {styles} from "./signup-style";
import GoogleAuth from "./Auth/GoogleAuth/google-auth";


export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false,
    }
    // const navigation = useNavigation();
  }
  
render() {
  return (
    <View style={[styles.signup]}>
      <Image
        style={styles.signupChild}
        resizeMode="cover"
        source={require("../../assets/vector-5.png")}
      />
      <Image
        style={styles.signupItem}
        resizeMode="cover"
        source={require("../../assets/vector-4.png")}
      />


      <View style={{
        backgroundColor:'blue', 
        top:'20%', 
        height:550, 
        width:350, 
        alignSelf: 'center', 
        borderRadius: 10, 
        borderColor: 'red', 
        borderWidth: 5}}>
      <UserProfile></UserProfile>
      </View>

      <View style={{top: 100}}>
      <GoogleAuth></GoogleAuth>
      </View>
      
      
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../../assets/vector-1.png")}
      />
      <Image
        style={[styles.signupChild4, styles.signupChildPosition]}
        resizeMode="cover"
        source={require("../../assets/vector-2.png")}
      />
      <Image
        style={styles.signupChild5}
        resizeMode="cover"
        source={require("../../assets/vector-6.png")}
      />
      <Image
        style={[styles.signupChild6, styles.signupChildPosition]}
        resizeMode="cover"
        source={require("../../assets/vector-3.png")}
      />
      <Image
        style={styles.signupChild7}
        resizeMode="cover"
        source={require("../../assets/vector-7.png")}
      />
    </View>
  );
};


}