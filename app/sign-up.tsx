import { Link, Stack } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import colors from 'utils/colors';

type Props = {};

const ForgotPassowrdPage = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitle: 'Sign Up',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Text>ForgotPassowrdPage</Text>
      <Link push href='/reset-password'>
        <Text style={styles.linkText}>Reset password.</Text>
      </Link>
    </>
  );
};

export default ForgotPassowrdPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 24,
  },
  text: {
    color: colors.primaryDark,
    fontSize: 36,
    fontFamily: 'Cormorant Garamond SemiBold',
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  linkText: {
    color: colors.secondaryDark,
    fontSize: 16,
    fontFamily: 'Cormorant Garamond Medium',
  },
});
