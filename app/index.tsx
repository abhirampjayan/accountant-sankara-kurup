import Button from 'components/Button';
import { Image } from 'expo-image';
import { Link, Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from 'utils/colors';

export default function App() {
  const { push } = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <View>
        <Image source={require('../assets/landing.png')} style={styles.image} />
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>Take control of your finance</Text>
          <Button
            title="Let's get started"
            onPress={() => push('/sign-in')}
            style={{ minWidth: 180 }}
          />
          <StatusBar style='auto' />
        </View>
      </SafeAreaView>
    </>
  );
}

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
