import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { BigHeader, CustomizedButton, Spinner, Footer } from './common';
import CustomerFooter from './common/CustomerFooter';
import MainScreen from './MainScreen';
import LoginForm from './LoginForm';
import { GLOBLE } from './common/Globle';

class LoginingScreen extends Component {

  state = { loggedIn: null,
            registering: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE',
      authDomain: 'authentication-70a18.firebaseapp.com',
      databaseURL: 'https://authentication-70a18.firebaseio.com',
      storageBucket: 'authentication-70a18.appspot.com',
      messagingSenderId: '682333809338'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  register() {
    this.setState({ registering: true });
    console.log('click');
  }

  render() {
    const { viewStyle, blockStyle, screenStyle, colorlessViewStyle } = styles;
    if (!this.state.registering) {
      switch (this.state.loggedIn) {
        case true:
          return (
          <View style={colorlessViewStyle}>
            <MainScreen style={screenStyle} />
            <CustomizedButton
            onPress={() => firebase.auth().signOut()}
            style={colorlessViewStyle}
            >
              登出
            </CustomizedButton>
        </View>
          );
        case false:
          return (
        <View style={viewStyle}>
          <BigHeader headerText="Student Got Talent" />
          <LoginForm />
          <View style={blockStyle} />
          <CustomerFooter
           footerText="還沒有帳號嗎？ 註冊。"
           onPress={() => console.log('abcd')}
          />
          <Footer footerText="需要協助？" />
          <Footer footerText="" />
        </View>
      );
        default:
          return (
        <View style={viewStyle}>
          <BigHeader headerText="Student Got Talent" />
          <Spinner size="large" />
          <View style={blockStyle} />
          <Footer footerText="還沒有帳號嗎？ 註冊。" onPress={() => console.log('abc2')} />
          <Footer footerText="需要協助？" />
          <Footer footerText="" />
        </View>
      );

      }
    } else {
      // Here is the regerister Steps screens
      return (<MainScreen />);
    }
  }
}

const styles = {
  viewStyle: {
    backgroundColor: GLOBLE.COLOR.BLUE,
    flex: 1
  },
  blockStyle: {
    flex: 4
  },
  screenStyle: {
    flex: 15
  },
  colorlessViewStyle: {
    flex: 1
  },
};

export default LoginingScreen;
