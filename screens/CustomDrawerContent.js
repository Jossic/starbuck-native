import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
	return (
		<DrawerContentScrollView {...props}>
			<View style={{ alignItems: 'center' }}>
				<Image
					source={{
						uri: 'https://believemy.com/uploads/6435acae7f1901acb1e4355395964ea5_ea186b839326aea1816bd1f3f2ab84b3.png',
					}}
					style={styles.logo}
				/>
			</View>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
	logo: { width: 85, height: 85, marginBottom: 15 },
});
