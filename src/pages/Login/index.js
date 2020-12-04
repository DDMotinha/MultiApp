//imports funções principais

  import React, {
    useState,
    useEffect
  } from 'react';
  
  import { NavigationContainer } from '@react-navigation/native';
  
  import { 
    Text, 
    TextInput, 
    View, 
    KeyboardAvoidingView, 
    Image, 
    TouchableOpacity,
    Animated,
    Keyboard,
    Alert,
    Linking
  } from 'react-native';
  
  //imports funções css e imagens
  
  import config from '../controller/config';
  import style from './style';
  import tokenRetorno from '../controller/tokenRetorno';
  import HomeScreen from './HomeScreen';
  
  export default function loginScreen({navigation}) {
  
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
    
    async function authSac(){
  
      const cpfUse = cpf;
      const senhaUse = senha;
  
      const url = config();
      const tokenRetornoAutenticacao = await tokenRetorno(4);
  
      const fetchURL =  ""+url+"WSMKUserSenhaSAC.rule?sys=MK0&token="+tokenRetornoAutenticacao+"&user_sac="+cpfUse+"&pass_sac="+senhaUse+""
      const response = await fetch(fetchURL);
      const data = await response.json();
      

      if ( data.AcessoSAC == "Sim" ){
        navigation.navigate(HomeScreen)
      } else {
        Alert.alert('Usuario ou senha, está errado.');
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
              require('../image/m-logo.png')
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
              onPress={() => (authSac)}
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
  