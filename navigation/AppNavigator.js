import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
	AppDrawerNavigator,
	AppTabNavigator,
	MainStackNavigator,
} from './Navigators';

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<AppDrawerNavigator />
		</NavigationContainer>
	);
};

export default AppNavigator;
