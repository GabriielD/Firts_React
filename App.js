import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home/LoginScreen.js';
import options from './screens/Options/Menu.js';
import imc from './screens/Imc/imcScreen.js';
import Alcool from './screens/Alcool/Alcool.js';

    


const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Option' component={options} />
          <Stack.Screen name='Imc' component={imc} />
          <Stack.Screen name='Alcool' component={Alcool} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  


export default App;