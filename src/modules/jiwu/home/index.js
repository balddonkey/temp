import React, { Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	StatusBar,
	Button,
	Alert
} from 'react-native';

import { createNavigator } from '../../../components/Navigator';
import HeadItem from '../components/HeadItem';

export default class Home extends Component {
	static navigationOptions = {
		title: 'Welcome',
		headerStyle: {
			backgroundColor: '#0B1022',
		},
		headerTintColor: '#fff',
		headerTitle: 'Home',
		...createNavigator({
			pressLeft: () => {
				alert('hehe');
			},
		}),
	};

	goDetail() {
		this.props.navigation.navigate('Details');
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
		let t = this;
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar
					barStyle="light-content"
				/>
				<View style={styles.header}>
					{/* <HeadItem /> */}
					<View style={styles.headerSubLeft}>
						<View style={styles.headerLeftItem}>
							<HeadItem />
						</View>
						<View style={styles.headerLeftItem}>
							<HeadItem />
						</View>
						<View style={styles.headerLeftItem}>
							<HeadItem />
						</View>
					</View>
					<View style={styles.headerSubRight}></View>
				</View>
				<Button onPress={t.goDetail.bind(t)} title='push'></Button>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#11172F'
	},
	header: {
		backgroundColor: 'gray',
		marginLeft: 20,
		marginRight: 20,
		height: 80,
		margin: 'auto',
		flexDirection: 'row'
	},
	headerSubLeft: {
		marginLeft: 0,
		marginRight: 0,
		height: '100%',
		backgroundColor: 'red',
		flex: 1,
		flexDirection: 'row',
	},
	headerLeftItem: {
		marginTop: 'auto',
		marginBottom: 'auto',
		height: 40,
		backgroundColor: 'green',
		width: '25%',
	},
	headerSubRight: {
		width: 240,
		height: 60,
		marginRight: 0,
		marginTop: 'auto',
		marginBottom: 'auto',
		backgroundColor: 'green',
	},
	headerRight: {
		flexDirection: 'column'
	}
});

