import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export let MainColor: string = "#0f0f0f"
export let BackgroundColor: string = "#1A1A1A"
export let BackgroundColor2: string = "#2b2b2b"
export let AccentColor1: string = "#10ff7f"
export let AccentColor2: string = "#ae4db2"
export let AccentColor3: string = "#1A1A1A"

export let NavBarSize: number = getNavBarSize();

function getNavBarSize(): number {
    if (Constants.platform?.ios) {
        return 90
    } else if (Constants.platform?.android){
        return 55;
    }
    return 40;
}

export const background = StyleSheet.create({
    body: {
        backgroundColor: "#1A1A1A",
        position: 'absolute',
        display: 'flex',
        alignContent: 'center',
        overflow: 'hidden',
    }
    
  });