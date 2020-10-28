import React, { Component } from 'react';
import { Text, Button, StyleSheet, Image, Linking, KeyboardAvoidingView, View} from 'react-native';
import { TextInput } from 'react-native-paper';


import { loginScreen } from '../style/loginScreen'

class LoginScreen extends Component {
  
  render(){
  return(
      <View style={loginScreen.container}>
          <Image
            source={require('../image/logo1.png')}
            style={loginScreen.image}
          />
          <TextInput
            onChangeText={(username) => this.setState({ username: text })}
            placeholder="Usuário"
            style={loginScreen.input}
          />
          <TextInput
            onChangeText={(password) => this.setState({ password: text })}
            placeholder="Senha"
            secureTextEntry={true}
            style={loginScreen.input}
          />
        <KeyboardAvoidingView style={loginScreen.button}>
          <KeyboardAvoidingView>
            <Button
              title={'Entrar'}
              style={loginScreen.button}
            />
          </KeyboardAvoidingView>
          <KeyboardAvoidingView>
            <KeyboardAvoidingView style={loginScreen.KeyboardAvoidingView}>
              <Text 
                style={loginScreen.idText}
                onPress={ ()=> Linking('../src/screen/') }
              >
                Esqueceu sua senha?
              </Text>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={loginScreen.ViewId}>
              <Text
               style={loginScreen.idText}
               onPress={ ()=> Linking.openURL('https://multiplicnet.com.br/') }
              >
                Ainda não possui um plano?
              </Text>
            </KeyboardAvoidingView>
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
      </View>
  )
  
  };
}

export default LoginScreen;
