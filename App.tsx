import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MainContainer from './src/navigation/MainContainer';
import * as Font from 'expo-font';

let customFonts = {
  'monument-extended': require('./assets/fonts/monument-extended.ttf'),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <MainContainer></MainContainer>
    );
  }
}
