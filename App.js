// Libraries
import React from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import Colors from './constants/Colors';

export default function App() {
	// Police personnalisée
	let [fontsLoaded] = useFonts({
		'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
		'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return (
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<ActivityIndicator size='large' color={Colors.primary} />
			</View>
		);
	}

	return <AppNavigator />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 50,
		paddingBottom: 15,
	},
});
