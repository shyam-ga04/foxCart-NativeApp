import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthScreen } from '../screens/auth/AuthScreen';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
