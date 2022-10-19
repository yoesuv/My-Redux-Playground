import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/Button';
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
            //props.setDecrease();
            dispatch(decreaseCounter());
          }} />
          <SizedBox width={10} />
          <Button title='+ Increase' onPress={() => {
            //props.setIncrease();
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
    flexDirection: 'row'
  },
  textCounter: {
    fontSize: 200,
    fontWeight: 'bold'
  }
})

export default Counter;
