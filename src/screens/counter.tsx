import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/button';
import SizedBox from '../components/SizedBox';
import { increaseCounter, decreaseCounter } from '../redux/actions/counter-action';
import { RootState } from '../redux/reducers';

const Counter = () => {
  const dispatch = useDispatch();
  const stateCounter = useSelector((state: RootState) => state.counter);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textCounter}>{stateCounter.counter}</Text>
        <View style={styles.buttonView}>
          <Button title='- Decrease' onPress={() => {
            dispatch(decreaseCounter());
          }} />
          <SizedBox width={10} />
          <Button title='+ Increase' onPress={() => {
            dispatch(increaseCounter());
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
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  textCounter: {
    fontSize: 200,
    fontWeight: 'bold'
  }
})

export default Counter;
