
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createNavigator } from '../../../components/Navigator';

export default class Details extends Component {

	static navigationOptions = {
		title: 'Welcome',
		headerStyle: {
			backgroundColor: '#f4511e',
		},
		headerTintColor: '#fff',
		headerTitle: 'Home',
		...createNavigator({
			pressLeft: () => {
				alert('hehe');
			},
		}),
	};
    render() {
        return (
            <View>
                <Text>12333</Text>
            </View>
        )
    }
}