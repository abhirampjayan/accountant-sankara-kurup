import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from 'utils/colors';
import { CustomButtonProps } from 'utils/types';

const Button: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  variant = 'default',
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      case 'outlined':
        return styles.outlinedButton;
      default:
        return styles.defaultButton;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle()]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultButton: {
    backgroundColor: colors.primary,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
