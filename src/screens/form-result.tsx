import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './root-stack-params';

export default function FormResult() {
    const route = useRoute<RouteProp<RootStackParamList, 'FormResult'>>();
    const params = route.params;
    return <SafeAreaView style={styles.container}>
        <Text style={styles.label}>Email : {params.email}</Text>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});