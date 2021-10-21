import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Counter from './src/screens/Counter';
import RequestApi from './src/screens/RequestApi';
import { RootStackParamList } from './src/screens/RootStackParams';
import { THEME_COLOR } from './src/data/Colors';
import store from './src/store/store'

const configureStore = store();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: THEME_COLOR
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="Counter" component={Counter} options={{
            title: 'Counter',
            headerStyle: {
              backgroundColor: THEME_COLOR
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
          <Stack.Screen name="RequestApi" component={RequestApi} options={{
            title: 'Request Api',
            headerStyle: {
              backgroundColor: THEME_COLOR
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
