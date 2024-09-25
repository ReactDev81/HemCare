import {Stack} from 'expo-router'
import Toast from 'react-native-toast-message';

const Layout = () => {
    return(
        <>
            <Stack>
                <Stack.Screen name='index' options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='register/index' options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name='login/index' options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            
            <Toast />
        </>
        
    )
}

export default Layout