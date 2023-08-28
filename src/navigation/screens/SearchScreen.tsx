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

let list: {
	name: string;
	cover_url: string;
	artists: string;
	track_url: string;
	time: string;
}[] = [];

const SearchScreen: React.FunctionComponent<SearchBarComponentProps> = () => {
	const [search, setSearch] = useState('');
	const [refreshing, setRefreshing] = React.useState(false);
	const updateSearch = (search: React.SetStateAction<string>) => {
		setSearch(search);
		TidalAPI.search(search.toString()).then((responce) => {
			list = responce;
			setRefreshing(true);
			setTimeout(() => {
				setRefreshing(false);
			}, 1);
		});
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
			<KeyboardAvoidingView style={{ paddingBottom: 100 }}>
				<ScrollView>
					{list.map((data, index) => (
						<ListItem key={index} bottomDivider>
							<Avatar source={{ uri: data.cover_url }} />
							<ListItem.Content>
								<ListItem.Title>{data.name}</ListItem.Title>
								<ListItem.Subtitle>
									{data.artists}
								</ListItem.Subtitle>
							</ListItem.Content>
							<ListItem.Chevron color="black" />
						</ListItem>
					))}
				</ScrollView>
			</KeyboardAvoidingView>
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
	return;
}
