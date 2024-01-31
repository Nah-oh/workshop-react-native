import { StatusBar } from 'expo-status-bar';
import Custom from './components/Custom';
import Home from './components/Home';
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="My workshop" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
