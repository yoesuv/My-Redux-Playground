import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import Splash from './src/screens/Splash';
import Home from './src/screens/home';
import Counter from './src/screens/counter';
import FormAndArguments from './src/screens/form-and-arguments';
import ListPlace from './src/screens/ListPlace';
import { RootStackParamList } from './src/screens/RootStackParams';
import { THEME_COLOR } from './src/data/colors';
import store from './src/redux/store'

const configureStore = store();
const Stack = createNativeStackNavigator<RootStackParamList>();

const baseOptions: NativeStackNavigationOptions = {
  title: "My Redux Playground",
  headerStyle: {
    backgroundColor: THEME_COLOR
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
};

export default function App() {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{...baseOptions, title: "My Redux Playground"}} />
          <Stack.Screen name="Counter" component={Counter} options={{...baseOptions, title: "Counter"}} />
          <Stack.Screen name="FormArguments" component={FormAndArguments} options={{...baseOptions, title: "Form & Arguments"}}/>
          <Stack.Screen name="ListPlace" component={ListPlace} options={{...baseOptions, title: "Networking"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
