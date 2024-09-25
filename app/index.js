import React, { useState, useEffect } from "react";
import { View } from "react-native";

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

    return (
        <View className="flex-1 justify-center items-center">
            {isSplashVisible ? <Splash /> : <WelcomeScreen />}
        </View>
    );
};

export default Index;
