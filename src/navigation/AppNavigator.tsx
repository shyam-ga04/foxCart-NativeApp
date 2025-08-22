import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { TabNavigator } from './TabNavigator';
import { AuthNavigator } from './AuthNavigator';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Main" component={TabNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
