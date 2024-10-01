import { View, Text} from "react-native";
import { useNavigation } from 'expo-router';
import FlatButton from "../../components/ui/FlatButton";
import Title from "../../components/ui/title";

const WelcomeScreen = () => {

    const navigation = useNavigation();

    return(
        <View className='flex-1 items-center justify-center bg-white w-full px-[30px]'>
            <View className='py-3'>
                <Title text="Welcome" classname="text-[42px] leading-[56.66px] text-center" />
                <Text className="text-sm leading-[22px] font-normal text-blue-light text-center mt-2 mb-7 font-figtree">Keep your haemophilia records organized and accessible. Record your bleeds, treatments, and important information in one convenient place.</Text>
                <FlatButton classname='bg-red-dark' text="Lets Start" onPress={() => navigation.navigate('register/index')} />
            </View>
        </View>
    )
}

export default WelcomeScreen