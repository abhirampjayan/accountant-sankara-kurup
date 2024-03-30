import Link from 'components/Link';
import XpButton from 'components/XpButton';
import XpTextInput from 'components/XpTextInput';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import colors from 'utils/colors';

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <View style={styles.page}>
      <Image source={require('../assets/heading.png')} style={styles.image} />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerShown: false,
        }}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <XpTextInput
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
            onChangeText={(text) => {
              // handle email input change
            }}
          />
          <View style={styles.alignEnd}>
            <XpTextInput
              placeholder='Password'
              secureTextEntry
              onChangeText={(text) => {
                // handle password input change
              }}
            />
            <Link push href='/reset-password'>
              Forgot password.
            </Link>
          </View>
          <XpButton onPress={() => null}>Sign In</XpButton>
        </View>
        <View>
          <Link push href='/reset-password'>
            Create an account.
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignInPage;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.paper,
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 24,
  },
  inputContainer: {
    gap: 38,
  },
  alignEnd: {
    alignItems: 'flex-end',
    gap: 12,
  },
  // text: {
  //   color: colors.primaryDark,
  //   fontSize: 36,
  //   fontFamily: 'Cormorant Garamond SemiBold',
  // },
  image: {
    width: '100%',
    aspectRatio: 4 / 2,
  },
});
