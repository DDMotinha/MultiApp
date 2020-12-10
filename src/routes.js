import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicial from './pages/Inicial';
import Boleto from './pages/Boleto';
import Login from './pages/Login';
import Contato from './pages/Contato';
import Consumo from './pages/Consumo';
import Liberacao from './pages/Liberacao';
import Teste from './pages/Teste';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Boleto" >
      <Stack.Screen 
          name="Login" 
          component={
            Login
          } 
          options={{ 
            title: '',
            headerTintColor: '',          
        }}
        />
        <Stack.Screen 
          name="Inicial" 
          component={
            Inicial
          } 
          options={{ 
            title: 'Home',
            headerStyle: {
              backgroundColor: "#42a5f5",                       
            },
            headerTintColor: '#fff',          
        }}
        />
        <Stack.Screen 
          name="Boleto" 
          component={Boleto} 
          options={{ 
            title: '2ª Via',
            headerStyle: {
              backgroundColor: "#42a5f5",                       
            },
            headerTintColor: '#fff',          
        }}
        />
        <Stack.Screen 
          name="Teste" 
          component={Teste} 
          options={{ 
            title: 'Teste de velocidade',
            headerStyle: {
              backgroundColor: "#42a5f5",                       
            },
            headerTintColor: '#fff',          
        }}
        />
        <Stack.Screen
         name="Consumo"
         component={Consumo} 
         options={{ 
          title: 'Consumo Mensal',
          headerStyle: {
            backgroundColor: "#42a5f5",                       
          },
          headerTintColor: '#fff',          
      }}
        />
        <Stack.Screen
         name="Liberacao" 
         component={Liberacao} 
         options={{ 
          title: 'Auto-desbloqueio',
          headerStyle: {
            backgroundColor: "#42a5f5",                       
          },
          headerTintColor: '#fff',          
      }}
        />
        <Stack.Screen 
          name="Contato" 
          component={Contato} 
          options={{ 
            title: 'Entrar em contato',
            headerStyle: {
              backgroundColor: "#42a5f5",                       
            },
            headerTintColor: '#fff',          
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}