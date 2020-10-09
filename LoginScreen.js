import React, { Component } from 'react';
import { Text, Button, StyleSheet, Image, Linking, KeyboardAvoidingView, View} from 'react-native';
import { TextInput } from 'react-native-paper';


class LoginScreen extends Component {
  
  render(){
  return(
      <View style={styles.container}>
          <Image
            source={require('../image/logo1.png')}
            style={styles.image}
          />
          <TextInput
            onChangeText={(username) => this.setState({ username: text })}
            placeholder="Usuário"
            style={styles.input}
          />
          <TextInput
            onChangeText={(password) => this.setState({ password: text })}
            placeholder="Senha"
            secureTextEntry={true}
            style={styles.input}
          />
        <KeyboardAvoidingView style={styles.button}>
          <KeyboardAvoidingView>
            <Button
              title={'Entrar'}
              style={styles.button}
            />
          </KeyboardAvoidingView>
          <KeyboardAvoidingView>
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
              <Text 
                style={styles.idText}
                onPress={ ()=> Linking('../src/screen/') }
              >
                Esqueceu sua senha?
              </Text>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={styles.ViewId}>
              <Text
               style={styles.idText}
               onPress={ ()=> Linking.openURL('https://multiplicnet.com.br/') }
              >
                Ainda não possui um plano?
              </Text>
            </KeyboardAvoidingView>
          </KeyboardAvoidingView>
        </KeyboardAvoidingView>
      </View>
  )

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      maxHeight: '12%',
      maxWidth: 500,
      width: '60%',
      height: '10%',
      padding: 2,
      marginBottom: 5,
      borderWidth: 0.2,
      minWidth: 200,
    },
    inputext: {
      maxHeight: '16%',
      maxWidth: '100%',
      width: '60%',
      height: '10%',
      textAlign:'center',
      fontWeight:'bold',
      marginBottom: 10,
      minWidth: 200,
      maxWidth: 500,
    },
    text: {
      fontSize: 32,
      margin: 30,
    },
    button: {
      fontSize: 12,
      flexDirection: "column",
      justifyContent: "space-between",
      marginTop: 20,
      marginBottom: 10,
      maxHeight: '16%',
      maxWidth: 500,
      minWidth: 200,
      width: '60%',
      height: '10%',
    },
    image: {
      maxHeight: '14%',
      maxWidth: 500,
      width: '100%',
      height: '100%',
    },
    idText: {
      fontSize: 12,
      textAlign: "center",
      justifyContent: "center",
      marginBottom: 100,
      marginTop: 20,
    },
    view: {
      fontSize: 12,
      flexDirection: "column",
      margin: 10,
    },
    viewId: {
      fontSize: 12,
      flexDirection: "column",
      justifyContent: "flex-end",
      marginTop: 100,
    },
  });
  
  };
}

export default LoginScreen;