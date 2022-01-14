import React, { useState } from 'react';
import {
	Dimensions,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Keyboard,
	Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../constants/Colors';
import * as productsAction from '../store/actions/products';

const AddProduct = (props) => {
	const dispatch = useDispatch();

	const [productName, setProductName] = useState('');

	const onSubmitPressHandler = () => {
		//Fermer le clavier
		Keyboard.dismiss();
		// Afficher une alerte
		dispatch(productsAction.addProduct(productName));
		Alert.alert('YEY', `Produit ${productName} ajouté !`);
		setProductName('');
	};

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<Text style={styles.label}>Nom du produit</Text>
				<TextInput
					style={styles.input}
					placeholder='Nom du produit'
					autoCapitalize='words'
					autoCorrect={false}
					autoFocus={true}
					// autoComplete="email"
					// keyboardType="email-address" // Pour changer le type de clavier, number, heure, etc...
					// maxLength={5}
					// multiline={true}
					value={productName}
					onChangeText={setProductName}
				/>
				<TouchableOpacity
					style={styles.submit}
					activeOpacity={0.8}
					onPress={() => onSubmitPressHandler()}>
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
