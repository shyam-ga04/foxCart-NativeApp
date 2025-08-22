import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useAuth } from '../hooks/useAuth';

export const SettingsScreen = () => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
