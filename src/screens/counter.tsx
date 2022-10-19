import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

import Button from '../components/Button';
import SizedBox from '../components/SizedBox';
import { increaseCounter, decreaseCounter } from '../redux/actions/counter-action';

interface RootState {
  counterConfigure: {
    counter: 0
  }
}

const Counter = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textCounter}>{props.counter}</Text>
        <View style={styles.buttonView}>
          <Button title='- Decrease' onPress={() => {
            props.setDecrease();
          }} />
          <SizedBox width={10} />
          <Button title='+ Increase' onPress={() => {
            props.setIncrease();
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

const mapStateToProps = (state: RootState) => ({
  counter: state.counterConfigure.counter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setIncrease: () => dispatch(increaseCounter()),
  setDecrease: () => dispatch(decreaseCounter())
})

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

export default connector(Counter);
