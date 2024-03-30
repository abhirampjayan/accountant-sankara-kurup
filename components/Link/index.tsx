import { Link as ExpoLink } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from 'utils/colors';

// Prop si the props of ExpoLink component
type Props = React.ComponentProps<typeof ExpoLink>;

const Link = ({ children, ...props }: Props) => {
  return (
    <ExpoLink {...props}>
      <Text style={styles.linkText}>{children}</Text>
    </ExpoLink>
  );
};

const styles = StyleSheet.create({
  linkText: {
    color: colors.secondaryDark,
    fontSize: 16,
    fontFamily: 'Cormorant Garamond Medium',
  },
});

export default Link;
