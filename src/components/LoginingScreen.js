import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from '../actions/index';
import { BigHeader, CustomizedButton, Footer } from './common';
import CustomerFooter from './common/CustomerFooter';
import MainScreen from './MainScreen';
import LoginForm from './LoginForm';
import { GLOBLE } from './common/Globle';

class LoginingScreen extends Component {

  constructor(props) {
    super(props);
    console.log('init');
  }

  state = { loggedIn: false,
            registering: false };

  register() {
    this.setState({ registering: true });
    console.log('click');
  }

  render() {
    const { viewStyle, blockStyle, screenStyle, colorlessViewStyle } = styles;
    if (!this.state.registering) {
      console.log(this.props.loginState);
      switch (this.props.loginState.success) {
        case true:
          return (
                  <View style={colorlessViewStyle}>
                    <MainScreen style={screenStyle} />
                    <CustomizedButton
                    onPress={() => this.props.signOut(false, '')}
                    style={colorlessViewStyle}
                    >登出
                    </CustomizedButton>
                 </View>);
        default:
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
                  </View>);
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

// Anything returned from this function will end up as props
// on the LoginForm container
function mapDispatchToProps(dispatch) {
  // Whenever loginSuccess is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ signOut }, dispatch);
}

function mapStateToProps(state) {
  // Whever is returned will show up as props
  // inside of LoginForm
  return {
    loginState: state.loginState
  };
}

// Promote BoxList from a component to a container - it
// needs to know about this new dispatch method, selectedNumBox & answerNum.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(LoginingScreen);
