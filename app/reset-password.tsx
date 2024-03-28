import { Stack } from 'expo-router';
import { Text } from 'react-native';
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
      <Text>ForgotPassowrdPage</Text>
    </>
  );
};

export default ForgotPassowrdPage;
