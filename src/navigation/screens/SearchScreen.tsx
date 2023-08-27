import * as React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Text } from "react-native";
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
      placeholder="Search ..."
      onChangeText={updateSearch}
      value={search}
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
    />
    <KeyboardAvoidingView>
      <Text>Search content here</Text>
    </KeyboardAvoidingView>
  </View>
);
};

const styles = StyleSheet.create({
  view: {
    paddingTop: Constants.statusBarHeight,
  },
  containerStyle: {
    backgroundColor: appStyle.MainColor
  },
  inputContainerStyle: {
    height: 35,
    borderRadius: 40,
    
  },
  inputStyle: {
    fontSize: 20,
    fontFamily: "monument-extended",
  }
});

export default SearchScreen;