// Libraries
import React from 'react';
import { useFonts } from 'expo-font';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import Colors from './constants/Colors';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import placesReducer from './store/reducers/places';
import productsReducer from './store/reducers/products';

const rootReducer = combineReducers({
	places: placesReducer,
	products: productsReducer,
});

const store = createStore(rootReducer);

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

	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
	);
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
