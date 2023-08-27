import * as React from 'react';
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	ScrollView,
} from 'react-native';
import { SearchBar, ListItem, Avatar } from '@rneui/themed';
import { useState } from 'react';
import Constants from 'expo-constants';
import * as appStyle from '../AppStyle';
import * as TidalAPI from '../../musicProviders/tidal/types/TidalAPIType';

type SearchBarComponentProps = {};

const list = [
	{
		name: 'Amy Farha',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President',
	},
	{
		name: 'Chris Jackson',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman',
	},
	{
		name: 'Amy Farha',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President',
	},
	{
		name: 'Chris Jackson',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman',
	},
	{
		name: 'Amy Farha',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President',
	},
	{
		name: 'Chris Jackson',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman',
	},
	{
		name: 'Amy Farha',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President',
	},
	{
		name: 'Chris Jackson',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman',
	},
	{
		name: 'Amy Farha',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President',
	},
	{
		name: 'Chris Jackson',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman',
	},
	{
		name: 'Amy Farha',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President',
	},
	{
		name: 'Chris Jackson',
		avatar_url:
			'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman',
	},
];

const SearchScreen: React.FunctionComponent<SearchBarComponentProps> = () => {
	const [search, setSearch] = useState('');

	const updateSearch = (search: React.SetStateAction<string>) => {
		setSearch(search);
		updateList(search.toString());
	};

	return (
		<View style={styles.view}>
			<SearchBar
				placeholder="Search ..."
				onChangeText={updateSearch}
				value={search}
				containerStyle={styles.containerStyle}
				inputContainerStyle={styles.inputContainerStyle}
				inputStyle={styles.inputStyle}
			/>
			<ScrollView style={{ paddingVertical: 10 }}>
				<KeyboardAvoidingView>
					{list.map((data, index) => (
						<ListItem key={index} bottomDivider>
							<Avatar source={{ uri: data.avatar_url }} />
							<ListItem.Content>
								<ListItem.Title>{data.name}</ListItem.Title>
								<ListItem.Subtitle>
									{data.subtitle}
								</ListItem.Subtitle>
							</ListItem.Content>
						</ListItem>
					))}
				</KeyboardAvoidingView>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		paddingTop: Constants.statusBarHeight,
	},
	containerStyle: {
		backgroundColor: appStyle.MainColor,
	},
	inputContainerStyle: {
		height: 35,
		borderRadius: 40,
	},
	inputStyle: {
		fontSize: 20,
		fontFamily: 'monument-extended',
	},
});

export default SearchScreen;

async function updateList(search: string) {
	await TidalAPI.search(search);
	return;
}
