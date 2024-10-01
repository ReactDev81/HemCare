import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { Figtree_400Regular, Figtree_600SemiBold, Figtree_700Bold} from "@expo-google-fonts/figtree";

// screens
import Splash from './splash';
import WelcomeScreen from './welcome';

const Index = () => {

    const [isSplashVisible, setSplashVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSplashVisible(false);
        }, 2500); 

        return () => clearTimeout(timer);
    }, []);

    const [fontsLoaded] = useFonts({
        'Figtree-400': Figtree_400Regular, 
        'Figtree-600': Figtree_600SemiBold,
        'Figtree-700': Figtree_700Bold,
    });
    
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View className="flex-1 justify-center items-center">
            {isSplashVisible ? <Splash /> : <WelcomeScreen />}
        </View>
    );
};

export default Index;
