import React from 'react';
import {Pressable, Alert ,Text, View} from 'react-native';
import {styles} from './google-auth.style';
import {SocialIcon} from 'react-native-elements';

export default class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Pressable
         style={{
            flexDirection: 'row',
            backgroundColor:'red', 
            width:200,
            height:50, 
            borderRadius: 10, 
            borderColor: 'green', 
            alignSelf: 'center', 
            borderWidth: 5}}
            onPress={() => this.AuthHandler()}
        >
            <Text style={{alignSelf: 'center', left: 65}}>
                GoogleAuth
            </Text>
        </Pressable>
        {/* <SocialIcon
          style={[styles.socialIcon]}
          title={'Sign In With Google'}
          iconStyle={styles.iconStyle}
          button
          type="google"
          // onPress={() => this.onGoogleButtonPress()}
        /> */}
      </>
    );
  }

  AuthHandler() {
    return (
       Alert.alert('hello world')
    )
  }
}
