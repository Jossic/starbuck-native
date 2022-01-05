import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import PlacesScreen from '../screens/Places';
const MainStackNavigatorComponent = createStackNavigator();

export const MainStackNavigator = () => {
	return (
		<MainStackNavigatorComponent.Navigator>
			<MainStackNavigatorComponent.Screen
				name='Home'
				component={HomeScreen}
			/>
			<MainStackNavigatorComponent.Screen
				name='Places'
				component={PlacesScreen}
			/>
		</MainStackNavigatorComponent.Navigator>
	);
};
