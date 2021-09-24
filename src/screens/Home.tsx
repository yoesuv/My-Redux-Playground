import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import SizedBox from '../components/SizedBox';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>Home</Text>
      <SizedBox height={10} />
      <Button title='Counter' onPress={() => {

      }} />
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
    fontWeight: 'bold'
  }
});
