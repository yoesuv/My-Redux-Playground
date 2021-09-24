import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import SizedBox from '../components/SizedBox';

export default function Counter() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textCounter}>0</Text>
        <View style={styles.buttonView}>
          <Button title='- Decrease' onPress={() => {

          }} />
          <SizedBox width={10} />
          <Button title='+ Increase' onPress={() => {

          }} />
        </View>
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
  box: {
    alignItems: 'center',
  },
  buttonView: {
    flexDirection: 'row'
  },
  textCounter: {
    fontSize: 200,
    fontWeight: 'bold'
  }
})
