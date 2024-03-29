import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  Image,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import { AppBar } from "@react-native-material/core";
import * as appStyle from "../AppStyle";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/Ionicons";
export let homeTitle: string = "Home";

const SAMPLE_DATA = [
  {
    title: "Recently played",
    data: ["TEST", "OFMG - HELLO"],
  },
  {
    title: "Top Weekly artists",
    data: ["Damso", "VALD", "Hytracer"],
  },
  {
    title: "Other data",
    data: ["YES", "Idk wtf to put here", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

export default function HomeScreen({}) {
  return (
    <View style={styles.container}>
      <AppBar
        title={homeTitle}
        color={appStyle.MainColor}
        variant="top"
        contentContainerStyle={{
          marginTop: Constants.statusBarHeight,
          marginBottom: 0,
          height: 70,
        }}
        titleStyle={{
          fontFamily: "monument-extended",
          fontSize: 20,
          color: "white",
        }}
      />
      <SectionList
        style={styles.container}
        sections={SAMPLE_DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableHighlight onPress={() => {console.log(item)}}>
              <View>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: "https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </TouchableHighlight>

            <View style={styles.item_title}>
              <Text style={styles.title}>MUSIC TITLE</Text>
              <Text style={styles.description}>{item}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyle.BackgroundColor,
  },
  item: {
    backgroundColor: appStyle.BackgroundColor2,
    padding: 10,
    marginVertical: 8,
    margin: 10,
    borderRadius: 7,
    flexDirection: "row",
  },
  item_title: {
    backgroundColor: appStyle.BackgroundColor2,
    fontFamily: "monument-extended",
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 1,
  },
  header: {
    paddingBottom: 10,
    marginTop: 0,
    paddingTop: 10,
    paddingLeft: 20,
    fontSize: 23,
    color: appStyle.AccentColor1,
    fontFamily: "monument-extended",
    backgroundColor: appStyle.BackgroundColor,
  },
  title: {
    fontSize: 15,
    color: "white",
  },
  description: {
    fontSize: 13,
    paddingTop: 3,
    paddingLeft: 3,
    color: "gray",
  },
  tinyLogo: {
    width: 64, //Minecraft hahahahahah
    height: 64,
    marginRight: 10,
    borderRadius: 8,
  },
});
