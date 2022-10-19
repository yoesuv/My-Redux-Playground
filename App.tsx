import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import Splash from './src/screens/Splash';
import Home from './src/screens/home';
import Counter from './src/screens/counter';
import FormAndArguments from './src/screens/form-and-arguments';
import ListPlace from './src/screens/ListPlace';
import { RootStackParamList } from './src/screens/RootStackParams';
import { THEME_COLOR } from './src/data/Colors';
import store from './src/redux/store'

const configureStore = store();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{
            title: 'My Redux Playground',
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
          <Stack.Screen name="FormArguments" component={FormAndArguments} options={{
            title: 'Form & Arguments',
            headerStyle: {
              backgroundColor: THEME_COLOR
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}/>
          <Stack.Screen name="ListPlace" component={ListPlace} options={{
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
