import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
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

const TabNavigator = createBottomTabNavigator();

export const AppTabNavigator = () => {
	return (
		<TabNavigator.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'HomeTab') {
						iconName = focused ? 'home' : 'home-outline';
					}
					if (route.name === 'PlacesTab') {
						iconName = focused ? 'location' : 'location-outline';
					}
					return (
						<Ionicons name={iconName} size={size} color={color} />
					);
				},
			})}
			tabBarOptions={{
				activeTintColor: Colors.primary,
				// inactiveTintColor: Color.primaryFaded,
			}}
			// initialRouteName='PlacesTab'
		>
			<TabNavigator.Screen
				name='HomeTab'
				component={HomeScreen}
				options={{ title: 'Accueil' }}
			/>
			<TabNavigator.Screen
				name='PlacesTab'
				component={PlacesScreen}
				options={{ title: 'Les salons' }}
			/>
		</TabNavigator.Navigator>
	);
};
