//imports funções principais

  import React, {
    useState,
    useEffect
  } from 'react';
  
  import { 
    Text, 
    TextInput, 
    View, 
    KeyboardAvoidingView,
    TouchableOpacity,
    Animated,
    Keyboard,
    Alert
  } from 'react-native';
  
  //imports funções css e imagens
  
  import Autentificacao from '../../services/autentificacao';
  import style from './style';
  import Inicial from '../Inicial';

  
  export default function Login({navigation}) {
  
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
  
    const [cpf, setCpf ] = useState('');
    const [ senha, setSenha ] = useState('');
    
    async function loginauth(){
      const auth = await Autentificacao(cpf, senha);

      if ( auth.AcessoSAC == "Sim" ){
        navigation.navigate(Inicial);
      } else {
        Alert.alert('Usuário ou senha incorreto.');
      }
    };
  
  
    return (  
      <KeyboardAvoidingView
        style={
          style.container
        }
      >
        <View
          style={
            style.containerLogo
          }
        >
          <Animated.Image
            source={
              require('../../images/m-logo.png')
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
              style.containerInput,
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
                  style.appLogo,
                  style.input
                ]
              }
              placeholder="CPF"
              autoCorrect={false}
              onChangeText={(cpf) => {setCpf(cpf)}}
            />
            <TextInput
              style={
                [
                  style.appLogo,
                  style.input
                ]
              }
              placeholder="SENHA"
              autoCorrect={false}
              onChangeText={(senha) => {setSenha(senha)}}
            />
            <TouchableOpacity
              style={
                style.btnSubmit
              }
              onPress={loginauth}
            >
              <Text
                style={
                  style.btnText
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
  