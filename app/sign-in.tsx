import { Image } from 'expo-image';
import { Link, Stack } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
      <SafeAreaView>
        <View style={styles.container}>
          <Link push href='/reset-password'>
            <Text style={styles.linkText}>Reset password.</Text>
          </Link>
          <Link push href='/reset-password'>
            <Text style={styles.linkText}>Reset password.</Text>
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
    aspectRatio: 4 / 2,
  },
  linkText: {
    color: colors.secondaryDark,
    fontSize: 16,
    fontFamily: 'Cormorant Garamond Medium',
  },
});
