import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import HeaderButton from '../components/UI/HeaderButton';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/Home';
import PlacesScreen from '../screens/Places';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import CustomDrawerContent from '../screens/CustomDrawerContent';

const headerOptions = {
	headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white',
	headerStyle:
		Platform.OS === 'ios'
			? { backgroundColor: 'transparent' }
			: { backgroundColor: Colors.primary },
};

const MainStackNavigatorComponent = createStackNavigator();

const MainStackNavigator = () => {
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
					} else if (route.name === 'PlacesTab') {
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
				component={MainStackNavigator}
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

const Drawer = createDrawerNavigator();

export const AppDrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{ drawerActiveTintColor: Colors.primary }}
			drawerContent={(props) => <CustomDrawerContent {...props} />}>
			<Drawer.Screen
				name='HomeTabDrawer'
				component={AppTabNavigator}
				options={{
					title: 'Accueil',
					drawerIcon: ({ focused, color, size }) => (
						<Ionicons
							name={focused ? 'home' : 'home-outline'}
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name='PlacesTabDrawer'
				component={PlacesScreen}
				options={{ title: 'Les salons' }}
			/>
		</Drawer.Navigator>
	);
};
