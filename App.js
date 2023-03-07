import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Preload from './src/Screens/Preload';
import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName='Preload'
      >
        <Stack.Screen
          name='Preload'
          component={Preload}
          options={
            {
              headerTransparent: true,
              headerTitle: '',             
            }
          }
        />

        <Stack.Screen
          name='SignIn'
          component={SignIn}
          options={
            {
              headerTransparent: true,
              headerTitle: 'Login',             
            }
          }
        />

        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={
            {
              headerTransparent: true,
              headerTitle: 'Criar conta',             
            }
          }
        />
        
        </Stack.Navigator>

    </NavigationContainer>
  );
}



export default App;
