import React, { useState } from 'react';
import { Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import { GREY_500, THEME_COLOR, THEME_COLOR_700 } from '../data/colors';

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title?: String;
  disabled?: boolean,
}

const Button: React.FC<ButtonProps> = ({onPress, title = 'Save', disabled = false}) => {

  return <Pressable disabled={disabled} style={({ pressed }) => [
      disabled ? styles.buttonDisabled : pressed ? styles.buttonPress :styles.button
    ]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: THEME_COLOR,
    flex: 1,
  },
  buttonPress: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: THEME_COLOR_700,
    flex: 1,
  },
  buttonDisabled: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: GREY_500,
    flex: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Button;
