import React, { ComponentProps } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from 'utils/colors';

type Props = ComponentProps<typeof TextInput>;

const XpTextInput = (props: Props) => {
  return (
    <TextInput
      placeholderTextColor={colors.secondary}
      style={styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: '100%',
    borderColor: colors.secondary,
    borderWidth: 1,
    minWidth: 300,
    fontSize: 20,
    fontFamily: 'Cormorant Garamond SemiBold',
    color: colors.primaryDark,
    textDecorationColor: colors.secondary,
  },
});

export default XpTextInput;
