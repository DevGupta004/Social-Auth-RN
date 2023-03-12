import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <Image
        style={[
          styles.loginChild,
          styles.loginChildPosition,
          styles.loginChildPosition1,
        ]}
        resizeMode="cover"
        source={require("../../assets/vector-5.png")}
      />
      <Image
        style={[styles.loginItem, styles.loginPosition]}
        resizeMode="cover"
        source={require("../../assets/vector-4.png")}
      />
      <Text style={[styles.login1, styles.login1Text, styles.login1FlexBox]}>
        Login
      </Text>
      <View style={[styles.loginInner, styles.loginInnerShadowBox]} />
      <View style={[styles.rectangleView, styles.loginInnerShadowBox]} />
      <Text style={styles.text}>***********</Text>
      <Image
        style={[styles.vectorIcon, styles.loginChildPosition]}
        resizeMode="cover"
        source={require("../../assets/vector-1.png")}
      />
      <Image
        style={[
          styles.loginChild1,
          styles.loginChildPosition,
          styles.loginChildPosition1,
        ]}
        resizeMode="cover"
        source={require("../../assets/vector-21.png")}
      />
      <Image
        style={[styles.loginChild2, styles.loginPosition]}
        resizeMode="cover"
        source={require("../../assets/vector-31.png")}
      />
      <Image
        style={styles.userIcon}
        resizeMode="cover"
        source={require("../../assets/user1.png")}
      />
      <Image
        style={styles.privateLockIcon}
        resizeMode="cover"
        source={require("../../assets/private-lock1.png")}
      />
      <View style={[styles.lineView, styles.loginChildPosition]} />
      <Text style={[styles.username, styles.forgotTypo]}>Username</Text>
      <Text style={[styles.forgot, styles.forgotTypo, styles.login1Text]}>
        Forgot ?
      </Text>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../../assets/group-1.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Signup")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/group-2.png")}
        />
      </Pressable>
      <Text style={[styles.register, styles.login1FlexBox]}>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginChildPosition: {
    left: 0,
    position: "absolute",
  },
  loginChildPosition1: {
    top: 0,
    left: 0,
  },
  loginPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  login1Text: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  login1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  loginInnerShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: -2.65116286277771,
      height: -0.8837209343910217,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray_100,
    left: 0,
    position: "absolute",
  },
  forgotTypo: {
    width: 109,
    color: Color.gray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  loginChild: {
    width: 429,
    height: 313,
  },
  loginItem: {
    top: 538,
    height: 262,
  },
  login1: {
    top: 204,
    left: 131,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.black,
  },
  loginInner: {
    top: 313,
    borderTopRightRadius: Border.br_2xl,
    borderBottomRightRadius: Border.br_2xl,
    shadowRadius: 6.19,
    elevation: 6.19,
    width: 310,
    height: 114,
  },
  rectangleView: {
    top: 505,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    shadowRadius: 4.96,
    elevation: 4.96,
    width: 146,
    height: 51,
  },
  text: {
    top: 393,
    width: 124,
    color: Color.gray_200,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_lg,
    left: 45,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    top: 1,
    width: 294,
    height: 192,
  },
  loginChild1: {
    width: 361,
    height: 200,
  },
  loginChild2: {
    top: 596,
    height: 204,
  },
  userIcon: {
    left: 6,
    width: 22,
    height: 19,
    top: 332,
    position: "absolute",
  },
  privateLockIcon: {
    top: 386,
    left: 3,
    width: 29,
    height: 26,
    position: "absolute",
  },
  lineView: {
    top: 371,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.51)",
    borderTopWidth: 0.8,
    width: 223,
    height: 1,
  },
  username: {
    top: 332,
    left: 45,
    width: 109,
  },
  forgot: {
    top: 444,
    left: 251,
  },
  groupIcon: {
    top: 344,
    left: 283,
    width: 54,
    height: 54,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 129,
    top: 522,
    width: 25,
    height: 25,
    position: "absolute",
  },
  register: {
    top: 512,
    left: 10,
    fontSize: 23,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.red,
  },
  login: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
