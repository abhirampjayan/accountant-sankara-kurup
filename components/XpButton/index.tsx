import React, { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import colors from 'utils/colors';

type Props = ComponentProps<typeof Pressable>;
const XpButton = ({ children, ...props }: Props) => {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.text}>{children as React.ReactNode}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  text: {
    color: colors.paper,
    fontSize: 20,
    fontFamily: 'Cormorant Garamond Bold',
  },
});

export default XpButton;
