import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Button from '../components/Button';
import SizedBox from '../components/SizedBox';
import { increaseCounter, decreaseCounter } from '../store/actions/UiCounter';

class Counter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.textCounter}>{this.props.counter}</Text>
          <View style={styles.buttonView}>
            <Button title='- Decrease' onPress={() => {
              this.props.decreaseCounter();
            }} />
            <SizedBox width={10} />
            <Button title='+ Increase' onPress={() => {
              this.props.increaseCounter();
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
    counter: state.counterConfigure.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
