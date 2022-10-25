import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { listPlaceLoadingStart, listPlaceLoadingStop } from '../redux/actions';
import { RootState } from '../redux/reducers';


export default function ListPlace() {

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.listPlace);

  useEffect(() => {
    dispatch(listPlaceLoadingStart());
    setTimeout(() => {
      dispatch(listPlaceLoadingStop());
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {state.isLoading ? <Loading /> : <BuildContent />}
    </SafeAreaView>
  );

  function Loading(): JSX.Element {
    return <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size='large' />
    </View>
  }

  function BuildContent(): JSX.Element {
    return <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center'}}>
      <Text style={styles.label}>Data Count : 10</Text>
    </View>
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});