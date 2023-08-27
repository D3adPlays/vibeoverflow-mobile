import React from 'react';
import { StatusBar } from 'react-native';
import MainContainer from './src/navigation/MainContainer';
import * as Font from 'expo-font';
import { setStatusBarStyle, setStatusBarBackgroundColor } from 'expo-status-bar';
import { MainColor } from './src/navigation/AppStyle';

let customFonts = {
  'monument-extended': require('./assets/fonts/monument-extended.ttf'),
};

setStatusBarStyle('light');
setStatusBarBackgroundColor(MainColor, false);

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
