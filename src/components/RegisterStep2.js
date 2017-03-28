import React, { Component } from 'react';
import { View, Text } from 'react-native';

class RegisterStep2 extends Component {
  render() {
    const { navigate } = this.props.navigation;

    const styles = {
      cotainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      viewStyle: {
        height: 128,
        width: 128,
        borderRadius: 64,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
      },
      textStyle: {
        textAlign: 'center'
      }
    };

    return (
      <View>
        <Text style={styles.textStyle}>
          RegisterStep2
        </Text>
        <View style={styles.cotainerStyle}>
          <View style={styles.viewStyle}>
            <Text
              style={styles.textStyle}
              onPress={() => navigate('Step2', { role: 'Teacher' })}
            >
              老師
            </Text>
          </View>
          <View style={styles.viewStyle}>
            <Text
              style={styles.textStyle}
              onPress={() => navigate('Step2', { role: 'Student' })}
            >
              學生
            </Text>
          </View>
         </View>
       </View>
    );
  }
}


export default RegisterStep2;
