import React from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import Colors from '../constants/Colors';

const AddProduct = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Text style={styles.label}>Nom du produit</Text>
				<TextInput style={styles.input} />
				<TouchableOpacity style={styles.submit}>
					<Text style={styles.submitText}>Ajouter</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AddProduct;

const styles = StyleSheet.create({
	container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	form: {
		backgroundColor: 'white',
		paddingHorizontal: 15,
		paddingVertical: 10,
		width: Dimensions.get('window').width * 0.8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.15,
		shadowRadius: 50,
	},
	label: {
		color: Colors.primary,
		fontWeight: 'bold',
	},
	submit: {
		backgroundColor: Colors.primary,
		padding: 10,
		width: 100,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'flex-end',
		marginTop: 15,
	},
	input: {
		borderBottomColor: Colors.primary,
		borderBottomWidth: 3,
		padding: 10,
		backgroundColor: '#ecf0f1',
		marginTop: 10,
	},
	submitText: {
		color: 'white',
	},
});
