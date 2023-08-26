import * as React from "react";
import { Text, View, NativeModules, StyleSheet } from "react-native";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";


const [search, setSearch] = useState("");

const updateSearch = (search: string) => {
  console.log(search);
};

export default function SearchScreen({}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});
