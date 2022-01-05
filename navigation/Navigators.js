import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';

import HomeScreen from '../screens/Home';
import PlacesScreen from '../screens/Places';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
const MainStackNavigatorComponent = createStackNavigator();

const headerOptions = {
	headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white',
	headerStyle:
		Platform.OS === 'ios'
			? { color: Colors.primary, backgroundColor: 'transparent' }
			: { color: 'white', backgroundColor: Colors.primary },
};

export const MainStackNavigator = () => {
	return (
		<MainStackNavigatorComponent.Navigator>
			<MainStackNavigatorComponent.Screen
				name='Home'
				component={HomeScreen}
				options={({ navigation }) => ({
					title: 'Accueil',
					...headerOptions,
					headerRight: () => (
						<HeaderButtons HeaderButtonComponent={HeaderButton}>
							<Item
								title='Places'
								iconName='location-outline'
								onPress={() => navigation.navigate('Places')}
							/>
						</HeaderButtons>
					),
					// headerShown: false,
				})}
			/>
			<MainStackNavigatorComponent.Screen
				name='Places'
				component={PlacesScreen}
				options={{ title: 'Les salons', ...headerOptions }}
			/>
		</MainStackNavigatorComponent.Navigator>
	);
};
