import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useAuth } from '@hooks/useAuth';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { forgotPassword } = useAuth();

  const handleForgotPassword = async () => {
    try {
      await forgotPassword(email);
      Alert.alert(
        'Password reset email sent',
        'Please check your email for instructions to reset your password.',
      );
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      <Text>Forgot Password</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Button title="Send Reset Email" onPress={handleForgotPassword} />
    </View>
  );
};
