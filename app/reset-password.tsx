import XpButton from 'components/XpButton';
import XpLink from 'components/XpLink';
import XpTextInput from 'components/XpTextInput';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
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
          headerTitle: 'Forgot Password',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Reset your password</Text>
        <XpTextInput placeholder='Email' />
        <XpButton onPress={() => null}>Send Reset Link</XpButton>
        <XpLink push href='/sign-up'>
          Don't have an account? Sign up
        </XpLink>
      </View>
      <Text>ForgotPassowrdPage</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paper,
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

export default ForgotPassowrdPage;
