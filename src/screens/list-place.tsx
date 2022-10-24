import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, ActivityIndicator } from 'react-native';


export default function ListPlace() {
  
  const loading = (<ActivityIndicator size='large' />);

  return (
    <SafeAreaView>
      <Text>List Place</Text>
    </SafeAreaView>
  );

};
