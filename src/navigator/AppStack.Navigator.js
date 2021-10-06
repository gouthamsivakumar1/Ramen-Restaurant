import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Module/Home/Screen/Home';
import RecipeDetails from '../Module/Home/Screen/recipeDetails';

const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Details" component={RecipeDetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
