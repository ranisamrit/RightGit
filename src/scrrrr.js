import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Text, Icon, Input, Button, SocialIcon} from 'react-native-elements';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
    return (
        <View style={style.wrapper}>
        <Input
          leftIcon={
            <Icon
              name="email-outline"
              type="material-community"
              color="rgba(110, 120, 170, 1)"
              size={25}
            />
          }
          placeholder="Email"
          inputContainerStyle={style.input}
          placeholderTextColor="grey"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
        />
        <Input
          leftIcon={
            <Icon
              name="lock"
              type="simple-line-icon"
              color="rgba(110, 120, 170, 1)"
              size={25}
            />
          }
          inputContainerStyle={style.input}
          placeholderTextColor="grey"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="next"
        />
      </View>

);
          }
};

export default SignIn;
const style = StyleSheet.create({
    wrapper:{
    },
    input: {
      borderWidth: 1,
      borderColor: 'white',
      borderLeftWidth: 0,
      height: 50,
      backgroundColor: 'white',
      marginBottom: 20,
    },
});  