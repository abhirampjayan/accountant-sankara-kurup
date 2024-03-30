import React, { ComponentProps } from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Props = ComponentProps<typeof TextInput>;

const XpTextInput = (props: Props) => {
  return <TextInput {...props} />;
};

const styles = StyleSheet.create({});

export default XpTextInput;
