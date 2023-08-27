import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Icon from 'react-native-vector-icons/Ionicons';

import * as appStyle from './AppStyle';


//Screens
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Header } from '@react-navigation/stack';

//Screen names
const homeName: string = "Home";
const searchName: string = "Search";
const settingsName: string = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='Search'
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) =>{
                    let iconName: string = "";
                    let rn = route.name

                    switch (rn) {
                        case homeName: {
                            iconName = focused ? 'home' : 'home-outline'
                            break;
                        }
                        case searchName: {
                            iconName = focused ? 'search' : 'search-outline'
                            break;
                        }
                        case settingsName: {
                            iconName = focused ? 'settings' : 'settings-outline'
                            break;
                        }
                        default: {
                            iconName = focused ? 'help-circle' : 'help-circle-outline'
                            break;
                        }
                    }
                    return <Icon name={iconName} color={color} size={size}/>
                },
                headerShown: false,
                tabBarActiveTintColor: appStyle.AccentColor1,
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: {
                    paddingBottom: 5,
                    fontSize: 10
                },
                tabBarStyle: {
                    padding: 5,
                    height: appStyle.NavBarSize,
                    marginBottom: 0,
                    backgroundColor: appStyle.MainColor
                },
            })}
            >
            
            <Tab.Screen name={searchName} component={SearchScreen}/>
            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={settingsName} component={SettingsScreen}/>
        
            </Tab.Navigator>
        </NavigationContainer>
    )
}