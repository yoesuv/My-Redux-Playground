import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import SizedBox from './sized-box';

interface ProgressDialogProps {
    show?: boolean,
}

const ProgressDialog: React.FC<ProgressDialogProps> = ({show = false}) => {
    return <Modal isVisible={show}
        animationIn = 'fadeIn'
        animationOut= 'fadeOut'>
        <View style={styles.container}>
            <Text style={styles.label}>Loading...</Text>
            <SizedBox height={12} />
            <ActivityIndicator size={'large'} />
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default ProgressDialog;