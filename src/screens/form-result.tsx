import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput } from 'react-native';

export default function FormResult() {
    return <SafeAreaView style={styles.container}>
        <Text>Form Result</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
});