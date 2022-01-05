// Librairies
import React from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

function Logo(props) {
	return (
		<TouchableWithoutFeedback
			onPress={() =>
				props.navigation.navigate('Places', { fromLogo: true })
			}>
			<Text
				style={{
					...styles.title,
					fontSize: props.dimensions.window.width * 0.055,
				}}>
				STARBUCKS
			</Text>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	title: {
		color: '#006341',
		textTransform: 'uppercase',
		fontFamily: 'Montserrat-Black',
	},
});

export default Logo;
