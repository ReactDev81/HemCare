import { View, Text} from "react-native";
import Toast from 'react-native-toast-message';
import Title from "../../components/ui/title";
import FlatButton from "../../components/ui/FlatButton";
import { Link, useRouter} from "expo-router";
import Input from "../../components/ui/form/input";
import PasswordInput from "../../components/ui/form/password-input";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Formik } from "formik";
import * as Yup from 'yup';

const Login = () => {

    const router = useRouter();

    const userSchema = Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
    });

    return(
        <View className="flex-1 items-center justify-center px-[30px] bg-white">
            <Title text="Login" />
            <Text className="mt-3.5 text-[#1D4A7A] text-sm">Create an account ? <Link className="text-[#C41B33]" href="/register">Sign up</Link></Text>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, {resetForm }) => {
                    Toast.show({
                        type: 'success',
                        text1: '👋 Hi ' + values.email,
                        text2: 'You have logged in successfully',
                    });
                    router.push('/home');
                    resetForm();
                }}
                validationSchema={userSchema}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                    <View className="w-full">
                        <Input 
                            placeholder="Email Address"
                            value={values.email}
                            setValue={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        {errors.email && <Text className="pt-1.5 text-red-dark">{errors.email}</Text>}
                        <PasswordInput 
                            value={values.password} 
                            setValue={handleChange('password')}
                            onBlur={handleBlur('password')}
                        />
                        {errors.password && <Text className="pt-1.5 text-red-dark">{errors.password}</Text>}
                        <Link href="/" className="text-right text-xs text-red-dark mt-2.5">Forgot Password</Link>
                        <FlatButton onPress={handleSubmit} text="Login" classname="mt-10 bg-red-dark" />
                    </View>
                )}
            </Formik>

            {/* spreator */}
            <View className="max-w-[300px] w-full mt-10 relative flex justify-center items-center">
                <View className="bg-[#E0E5EB] h-[2px] w-full absolute"></View>
                <Text className="text-blue-dark tracking-[0.3px] text-xs h-[18px] w-[98px] bg-white text-center">or sign up with</Text>
            </View>

            {/* social media login */}
            <View className="flex justify-between items-center flex-row gap-x-[26px] mt-8">
                <View className="flex-1 border border-solid border-[#E0E5EB] rounded-[10px] p-3.5 flex items-center justify-center">
                    <AntDesign name="google" size={24} color="#DB4437" />
                </View>
                <View className="flex-1 border border-solid border-[#E0E5EB] rounded-[10px] p-3.5 flex items-center justify-center">
                    <AntDesign name="apple1" size={24} color="#000000" />
                </View>
                <View className="flex-1 border border-solid border-[#E0E5EB] rounded-[10px] p-3.5 flex items-center justify-center">
                    <FontAwesome5 name="facebook-f" size={24} color="#4267B2" />
                </View>
            </View>

        </View>
    )
}

export default Login