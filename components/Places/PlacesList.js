// Librairies
import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Alert,
	Dimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as placesActions from '../../store/actions/places';

function PlacesList(props) {
	const dispatch = useDispatch();

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={() => dispatch(placesActions.deleteStore(props.item.id))}>
			<View style={styles.card}>
				<Text style={styles.cardTitle}>{props.item.location}</Text>
				<Text style={styles.cardTitle}>{props.item.country}</Text>
				<Text style={styles.cardTitle}>{props.item.phoneNumber}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		width: '100%',
		padding: Dimensions.get('window').width < 400 ? 19 : 30,
		borderBottomWidth: 1,
		borderColor: '#182E28',
	},
});

export default PlacesList;
