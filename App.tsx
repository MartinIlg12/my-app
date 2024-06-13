import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { StackNavigator } from './src/presentation/navigation/StackNavigator';
import { useColorScheme } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export const App = () => {
  //hook tema del dispositivo
  const colorScheme = useColorScheme();
  const theme=colorScheme === 'dark' ? eva.dark : eva.light;
  return (
   <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
          <NavigationContainer>
          <StackNavigator></StackNavigator>
          </NavigationContainer>
      </ApplicationProvider>
    </>
  )
}
export default App;