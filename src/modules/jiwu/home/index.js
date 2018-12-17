import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import Echarts from 'native-echarts';

export default class Home extends Component {
	static navigationOptions = {
		title: 'Welcome',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
		headerTintColor: '#fff',
    headerTitle: 'Home',
	};
	render() {
		const option = {
			title: {
				text: 'ECharts demo'
			},
			tooltip: {},
			legend: {
				data: ['销量']
			},
			xAxis: {
				data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
			},
			yAxis: {},
			series: [{
				name: '销量',
				type: 'bar',
				data: [5, 20, 36, 10, 10, 20]
			}]
		};
		return (
			<View style={styles.container}>
				<Text style={styles.text}>111</Text>
				<Echarts option={option} height={300} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
	},
	text: {
		fontSize: 24,
	}
});

