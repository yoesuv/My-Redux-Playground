import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, Text, View, TextInput } from 'react-native';
import Modal from "react-native-modal";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Button from '../components/button';
import SizedBox from '../components/sized-box';
import { submitLoginStart } from '../redux/actions'
import { RootState } from '../redux/reducers';

export default function FormAndArguments() {

    interface ILoginInput {
        email: String;
        password: String;
    }

    const schema = Yup.object().shape({
        email: Yup.string().email('enter a valid email').required('enter an email'),
        password: Yup.string().required('enter a password').min(5, 'password min 5 character')
    });

    const { control, handleSubmit, reset, formState } = useForm<ILoginInput>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });
    const { isDirty, isValid } = formState;
    

    const onSubmit = handleSubmit(({email, password}) => {
        dispatch(submitLoginStart(email, password));
    });

    const onReset = () => {
        setIsModalVisible(true);
    };

    const dispatch = useDispatch();
    const stateForm = useSelector((state: RootState) => state.form);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const closeModal = () => {
        setIsModalVisible(false);
    };

    const resetForm = () => {
        setIsModalVisible(false);
        reset();
    };

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <SizedBox height={10} />
            <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value ? value.toString() : ''}
                    />
                )}
            />
            <SizedBox height={15} />
            <Text style={styles.label}>Password</Text>
            <SizedBox height={10} />
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value ? value.toString() : ''}
                    />
                )}
            />
            <View style={styles.viewBottom} >
                <Button title="Reset" onPress={onReset} />
                <SizedBox width={10} />
                <Button title="Login" disabled={!isValid || !isDirty} onPress={onSubmit} />
            </View>

            <Modal isVisible={isModalVisible}
                animationIn = 'fadeIn'
                animationOut= 'fadeOut'>
                <View style={styles.containerModal}>
                    <Text style={styles.label}>Reset Form Login?</Text>
                    <SizedBox height={24} />
                    <View style={{ flexDirection: "row"}}>
                        <Button title="Cancel" onPress={closeModal} />
                        <SizedBox width={10} />
                        <Button title="Yes" onPress={resetForm} />
                    </View>
                    
                </View>
            </Modal>
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
    viewBottom: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
    },
    containerModal: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingVertical: 24,
        borderRadius: 8,
    }
});