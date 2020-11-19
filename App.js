//imports funções principais

import React, {
  useState,
  useEffect
} from 'react';

import { render } from 'react-dom';

import { 
  Text, 
  TextInput, 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TouchableOpacity,
  Animated,
  Keyboard,
} from 'react-native';

//imports funções css e imagens

import config from './src/controller/config'
import tokenApi from './src/controller/Api'
import config from './src/controller/config';
import appStyle from './src/style/m-app-style';
import tokenRetorno from './src/controller/tokenRetorno';


export default function App() {
  
  const [offset, setOffset] = useState(new Animated.ValueXY({x: 0, y: 105}));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [logo, setLogo] = useState(new Animated.ValueXY({ x: 150, y: 150}))

  const [cpf, setCpf ] = useState('');
  const [ senha, setSenha ] = useState('');
  

  useEffect(() => {

    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);


    Animated.parallel([

      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      })
    ]).start()
  }, []);



  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 75,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 75,
        duration: 100,
      })
    ]).start();
  };



  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 150,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100,
      })
    ]).start();

  };

  
  async function authSac(cpf, senha){

    const url = config();
    const tokenRetornoAutenticacao = tokenRetorno(4);

    const response = await fetch(""+url+"WSMKUserSenhaSAC.rule?sys=MK0&token="+tokenRetornoAutenticacao+"&user_sac="+cpf+"&pass_sac="+senha+"")
    const data = await response.json()

    if ( data.AcessoSAC = "Sim" ){
      
    } else {
      alert('Usuario ou senha, está errado.');
    }
  };


  return (
    <KeyboardAvoidingView
      style={
        appStyle.container
      }
    >
      <View
        style={
          appStyle.containerLogo
        }
      >
        <Animated.Image
          source={
            require('./src/image/m-logo.png')
          }
          style={{
            width: logo.x,
            height: logo.y,
          }}
        />
      </View>
      <Animated.View
        style={
          [
            appStyle.containerInput,
            {
              opacity: opacity,
              transform: [
                {
                    translateY: offset.y,
                },
            ]
            }
          ]
        }
      >
          <TextInput
            style={
              [
                appStyle.appLogo,
                appStyle.input
              ]
            }
            placeholder="CPF"
            autoCorrect={false}
            onChangeText={(cpf) => {setCpf(cpf)}}
          />
          <TextInput
            style={
              [
                appStyle.appLogo,
                appStyle.input
              ]
            }
            placeholder="SENHA"
            autoCorrect={false}
            onChangeText={(senha) => {setSenha(senha)}}
          />
          <TouchableOpacity
            style={
              appStyle.btnSubmit
            }
            onPress={authSac}
          >
            <Text
              style={
                appStyle.btnText
              }
            >
              Entrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>
              Ainda não possui um plano?
            </Text>
          </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};
