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

import appStyle from './src/style/m-app-style';

export default function App() {
  
  const [offset, setOffset] = useState(new Animated.ValueXY({x: 0, y: 105}));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [logo, setLogo] = useState(new Animated.ValueXY({ x: 150, y: 150}))

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
              appStyle.input
            }
            placeholder="CPF"
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <TextInput
            style={
              appStyle.input
            }
            placeholder="SENHA"
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <TouchableOpacity
            style={
              appStyle.btnSubmit
            }
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