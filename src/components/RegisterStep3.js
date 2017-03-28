import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


class RegisterStep3 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    const { params } = this.props.navigation.state;
    const styles = {
      textStyle: {
        textAlign: 'center'
      }
    };
    return (
      <View style={{ borderWidth: 5, flex: 1 }}>
        <Text style={styles.textStyle}>
          RegisterStep3: You just select {params.role}
        </Text>

        <KeyboardAwareScrollView>
          <View
          style={{ borderColor: 'gray', borderBottomWidth: 1, elevation: 1 }}
          >
          <TextInput
            style={{ height: 40 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          </View>
        </KeyboardAwareScrollView>
       </View>
    );
  }
}

export default RegisterStep3;
