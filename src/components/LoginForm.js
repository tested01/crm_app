import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { CustomizedButton, MaterialCard, TransparentCardSection, NoLabelInput, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <CustomizedButton onPress={this.onButtonPress.bind(this)}>
        登入
      </CustomizedButton>
    );
  }

  render() {
    return (
      <MaterialCard>
        <TransparentCardSection>
          <NoLabelInput
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </TransparentCardSection>

        <TransparentCardSection>
          <NoLabelInput
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </TransparentCardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <TransparentCardSection>
          {this.renderButton()}
        </TransparentCardSection>
        <Text style={styles.linkTextStyle}> 訪客登入 </Text>
      </MaterialCard>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red'
  },
  linkTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'white'
  }
};

export default LoginForm;
