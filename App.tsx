import Button from 'components/Button';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from 'utils/colors';

export default function App() {
  return (
    <>
      <View>
        <Image source={require('./assets/landing.png')} style={styles.image} />
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.text}>Take control of your finance</Text>

          <StatusBar style='auto' />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  text: {
    color: colors.dark,
    fontSize: 36,
    fontFamily: 'Cormorant Garamond Medium',
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  header: {},
});
