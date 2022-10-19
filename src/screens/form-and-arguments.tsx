import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput } from 'react-native';
import Button from '../components/Button';
import SizedBox from '../components/SizedBox';

export default function FormAndArguments() {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <SizedBox height={10} />
            <TextInput style={styles.input}/>
            <SizedBox height={15} />
            <Text style={styles.label}>Password</Text>
            <SizedBox height={10} />
            <TextInput style={styles.input}/>
            <View style={styles.bottomButton} >
                <Button  title='Login' onPress={() => {

                }} />
            </View>
        </SafeAreaView>
    );
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
    },
    input: {
        borderColor:'#EEEEEE',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 8,
        height: 40,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    bottomButton: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
    }
});