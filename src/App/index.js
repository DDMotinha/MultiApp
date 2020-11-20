import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Screen/HomeScreen';
import BilletScreen from './src/Screen/BilletScreen';
import TestScreen from './src/Screen/TestScreen';
import ConsumeScreen from './src/Screen/ConsumeScreen';
import UnlockScreen from './src/Screen/UnlockScreen';
import ContactScreen from './src/Screen/ContactScreen';

const Stack = createStackNavigator();

export default function AppMain() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" >
        <Stack.Screen 
          name="HomeScreen" 
          component={
            HomeScreen
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
          name="BilletScreen" 
          component={BilletScreen} 
          options={{ 
            title: '2ª Via',
            headerStyle: {
              backgroundColor: "#42a5f5",                       
            },
            headerTintColor: '#fff',          
        }}
        />
        <Stack.Screen 
          name="TestScreen" 
          component={TestScreen} 
          options={{ 
            title: 'Teste de velocidade',
            headerStyle: {
              backgroundColor: "#42a5f5",                       
            },
            headerTintColor: '#fff',          
        }}
        />
        <Stack.Screen
         name="ConsumeScreen"
         component={ConsumeScreen} 
         options={{ 
          title: 'Consumo Mensal',
          headerStyle: {
            backgroundColor: "#42a5f5",                       
          },
          headerTintColor: '#fff',          
      }}
        />
        <Stack.Screen
         name="UnlockScreen" 
         component={UnlockScreen} 
         options={{ 
          title: 'Auto-desbloqueio',
          headerStyle: {
            backgroundColor: "#42a5f5",                       
          },
          headerTintColor: '#fff',          
      }}
        />
        <Stack.Screen 
          name="ContactScreen" 
          component={ContactScreen} 
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