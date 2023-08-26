import * as React from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import Constants from "expo-constants";
import * as appStyle from "../AppStyle";


type SearchBarComponentProps = {};

const SearchScreen: React.FunctionComponent<SearchBarComponentProps> = () => {
const [search, setSearch] = useState("");

const updateSearch = (search: React.SetStateAction<string>) => {
  setSearch(search);
};

return (
  <View style={styles.view}>
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
      containerStyle={styles.containerStyle}
    />
  </View>
);
};

const styles = StyleSheet.create({
  view: {
    paddingTop: Constants.statusBarHeight,
  },
  containerStyle: {
    backgroundColor: appStyle.BackgroundColor
  }
});

export default SearchScreen;