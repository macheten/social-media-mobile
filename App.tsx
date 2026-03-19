import {
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Lock, LogIn, Mail } from "lucide-react-native";
import "./global.css";

export default function App() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-5xl mb-10'>Вход</Text>
      <View className='gap-2 w-full px-10 mb-5'>
        <View className='relative'>
          <View className='absolute left-4 top-0 bottom-0 justify-center opacity-40'>
            <Mail size={20} />
          </View>
          <TextInput
            className='py-4 pl-12 pr-5 border border-gray-400 rounded-xl'
            placeholder='Email'
          />
        </View>
        <View className='relative'>
          <View className='absolute left-4 top-0 bottom-0 justify-center opacity-40'>
            <Lock size={20} />
          </View>
          <TextInput
            className='py-4 pl-12 pr-5 border border-gray-400 rounded-xl'
            placeholder='Пароль'
          />
        </View>
      </View>
      <Pressable className='bg-violet-500 px-5 py-2 rounded-xl border border-gray-400'>
        <View className='flex-row items-center justify-center'>
          <Text className='text-2xl text-white mr-2'>Войти</Text>
          <LogIn color={"#fff"} />
        </View>
      </Pressable>
    </View>
  );
}
