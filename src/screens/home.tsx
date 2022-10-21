import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Button from '../components/button';
import SizedBox from '../components/sized-box';
import { RootStackParamList } from './root-stack-params';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <SizedBox height={10} />
        <Button title='Counter' onPress={() => {
          navigation.navigate('Counter');
        }} />
        <SizedBox height={10} />
        <Button title='Form & Arguments' onPress={() => {
          navigation.navigate('FormArguments');
        }} />
        <SizedBox height={10} />
        <Button title='Request Api' onPress={() => {
            navigation.navigate('ListPlace');
        }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollview: {
    paddingHorizontal: 24,
  },
});
