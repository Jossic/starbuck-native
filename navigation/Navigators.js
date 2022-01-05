import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import PlacesScreen from '../screens/Places';
import { Platform } from 'react-native';
const MainStackNavigatorComponent = createStackNavigator();

const headerOptions = {
	headerTintColor: Platform.OS === 'ios' ? '#006341' : 'white',
	headerStyle:
		Platform.OS === 'ios'
			? { color: '#006341', backgroundColor: 'transparent' }
			: { color: 'white', backgroundColor: '#006341' },
};

export const MainStackNavigator = () => {
	return (
		<MainStackNavigatorComponent.Navigator>
			<MainStackNavigatorComponent.Screen
				name='Home'
				component={HomeScreen}
				options={{
					title: 'Accueil',
					...headerOptions,
				}}
			/>
			<MainStackNavigatorComponent.Screen
				name='Places'
				component={PlacesScreen}
				options={{ title: 'Les salons', ...headerOptions }}
			/>
		</MainStackNavigatorComponent.Navigator>
	);
};
