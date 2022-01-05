// Librairies
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Places(props) {
	console.log(`props =>`, props);
	return (
		<View>
			<Text>Places</Text>

			{props.route.params?.fromLogo && <Text>ESTER EGG</Text>}
		</View>
	);
}

const styles = StyleSheet.create({});

export default Places;
