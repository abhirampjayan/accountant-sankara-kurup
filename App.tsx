import Button from 'components/Button';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from 'utils/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Namaskaram, Sankara Kurup Here</Text>
        <Button
          onPress={() => console.log('Button pressed')}
          title='Press me'
          variant='primary'
        />
        <Button
          onPress={() => console.log('Button pressed')}
          title='Press me'
          variant='secondary'
        />
        <Button
          onPress={() => console.log('Button pressed')}
          title='Press me'
          variant='outlined'
        />
        <Button
          onPress={() => console.log('Button pressed')}
          title='Press me'
          variant='default'
        />
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.dark,
  },
});
