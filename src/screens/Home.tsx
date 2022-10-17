import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Button from '../components/Button';
import SizedBox from '../components/SizedBox';
import { RootStackParamList } from '../screens/RootStackParams';

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
