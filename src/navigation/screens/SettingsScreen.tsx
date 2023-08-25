import * as React from 'react';
import {Text, View, NativeModules} from 'react-native';

export default function SettingsScreen({}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => NativeModules.navigate("Home")}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                  Settings #TODO
              </Text>
        </View>
  );
}