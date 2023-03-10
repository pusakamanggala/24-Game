import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Gameplay from './pages/Gameplay';
import MainMenu from './pages/MainMenu';
import SplashScreen from './pages/SplashScreen';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import SelectMode from './pages/SelectMode';
import Tutorial from './pages/Tutorial';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Gameplay" component={Gameplay} />
        <Stack.Screen name="SelectMode" component={SelectMode} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
