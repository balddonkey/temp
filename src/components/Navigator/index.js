
import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { MaterialHeaderButtons, Item } from '../MaterialHeaderButtons';

// let navigationOptions = {
//   title: 'Screen with header buttons',
//   // use MaterialHeaderButtons with consistent styling across your app
//   headerRight: (
//     <MaterialHeaderButtons>
//       <Item title="add" iconName="search" onPress={() => console.warn('add')} />
//       <Item title="edit" onPress={() => console.warn('edit')} />
//     </MaterialHeaderButtons>
//   ),
// };

export const createNavigator = (config) => {
	return {
		headerLeft: (
			<Button
				onPress={config.pressLeft ? config.pressLeft : () => {}}
				title="Info"
				color="#fff"
			/>
		),
		headerRight: (
			<Button
				onPress={() => alert('This is a button!')}
				title="Info"
				color="#fff"
			/>
    ),
	}
};

