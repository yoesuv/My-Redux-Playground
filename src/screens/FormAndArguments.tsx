import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

export default function FormAndArguments() {
    return(
        <SafeAreaView style={styles.container}>
            <Text>Form & Arguments</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});