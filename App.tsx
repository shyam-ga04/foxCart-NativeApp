/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { darkTheme, lightTheme } from './src/theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

    const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode],
  );

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}



export default App;
