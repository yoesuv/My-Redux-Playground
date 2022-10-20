import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, Text, View, TextInput } from 'react-native';
import Button from '../components/button';
import SizedBox from '../components/sized-box';
import { submitLoginStart } from '../redux/actions'
import { RootState } from '../redux/reducers';

export default function FormAndArguments() {

    interface ILoginInput {
        email: String;
        password: String;
    }

    const { control, handleSubmit, formState } = useForm<ILoginInput>({
        mode: 'onChange',
    });

    const onSubmit = handleSubmit(({email, password}) => {
        console.debug(`Form Argument Screen Email: ${email}\Password: ${password}`);
        dispatch(submitLoginStart(email, password));
    });

    const dispatch = useDispatch();
    const stateForm = useSelector((state: RootState) => state.form);

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
                <Button title="Reset" onPress={onSubmit} />
                <SizedBox width={10} />
                <Button title="Login" onPress={onSubmit} />
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
    viewBottom: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
    },
});