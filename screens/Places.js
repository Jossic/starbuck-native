// Librairies
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import PlacesList from '../components/Places/PlacesList';

function Places(props) {
	const places = useSelector((state) => state.places.places);
	return (
		<View>
			<FlatList
				data={places}
				renderItem={({ item }) => <PlacesList item={item} />}
				keyExtractor={(item) => Math.random().toString()}
				style={{ width: '100%' }}
			/>
			{props.route.params?.fromLogo && <Text>ESTER EGG</Text>}
		</View>
	);
}

const styles = StyleSheet.create({});

export default Places;
