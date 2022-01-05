import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppTabNavigator, MainStackNavigator } from './Navigators';

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<AppTabNavigator />
		</NavigationContainer>
	);
};

export default AppNavigator;
