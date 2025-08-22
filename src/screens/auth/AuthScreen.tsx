import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Login, SignUp, ForgotPassword } from './components';

const Tab = createMaterialTopTabNavigator();

export const AuthScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="ForgotPassword" component={ForgotPassword} />
    </Tab.Navigator>
  );
};