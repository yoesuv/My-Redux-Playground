import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Counter from './src/screens/Counter';
import { RootStackParamList } from './src/screens/RootStackParams';
import { THEME_COLOR } from './src/data/Colors';

const Stack = createNativeStackNavigator<RootStackParamList>();
const initialState = {
  counter: 0
}
const reducer = (state = initialState) => {
  return state;
}
const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
