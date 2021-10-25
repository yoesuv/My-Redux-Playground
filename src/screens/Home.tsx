import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Button from '../components/Button';
import SizedBox from '../components/SizedBox';
import { RootStackParamList } from '../screens/RootStackParams';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home</Text>
      <SizedBox height={10} />
      <Button title='Counter' onPress={() => {
        navigation.navigate('Counter');
      }} />
      <View style={styles.button}>
        <Button title='Request Api' onPress={() => {
          navigation.navigate('ListPlace');
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
  }
});
