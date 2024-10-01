import { TouchableOpacity, Text} from "react-native";

const FlatButton = ({text, onPress, classname, textColor}) => {
    return(
        <TouchableOpacity onPress={onPress} className={`block rounded-[10px] py-[18px] text-center ${classname}`}>
            <Text className={`font-normal text-sm text-center ${textColor ? textColor : 'text-white'}`}>{text}</Text>
        </TouchableOpacity>
    )
}

export default FlatButton