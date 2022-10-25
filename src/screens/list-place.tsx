import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { listPlaceLoadingStart, listPlaceLoadingStop } from '../redux/actions';
import { RootState } from '../redux/reducers';
import UseList from '../services/list-place-service';

export default function ListPlace() {

  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.listPlace);
  const queryClient = new QueryClient();

  useEffect(() => {
    dispatch(listPlaceLoadingStart());
    setTimeout(() => {
      dispatch(listPlaceLoadingStop());
    }, 3000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <BuildContent />
      </SafeAreaView>
    </QueryClientProvider>
  );

  function Loading(): JSX.Element {
    return <View style={styles.containerCenter}>
      <ActivityIndicator size='large' />
    </View>
  }

  function Error(): JSX.Element {
    return <View style={styles.containerCenter}>
      <Text style={styles.label}>Opss...</Text>
    </View>
  }

  function BuildContent(): JSX.Element {
    const { data, status } = UseList();
    if (status === 'loading') {
      return <Loading />
    }
    if (status === 'success') {
      return <View style={styles.containerCenter}>
        <Text style={styles.label}>Data Count : {data.length}</Text>
      </View>
    }
    return <Error />
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
  },
  containerCenter: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  }
});