import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Button from '../components/Button';
import SizedBox from '../components/SizedBox';

class Counter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.textCounter}>{this.props.counter}</Text>
          <View style={styles.buttonView}>
            <Button title='- Decrease' onPress={() => {
              console.log('Decrease');
              this.props.increaseCounter;
            }} />
            <SizedBox width={10} />
            <Button title='+ Increase' onPress={() => {
              console.log('Increase');
              this.props.decreaseCounter;
            }} />
          </View>
        </View>
      </View>
    );
  };
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

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);
