import { View, Text } from "react-native";
import { ImageBackground } from "react-native";
import { styles } from "../../styles/_mainstyle";
import { Link } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
const Profile = () => {
  return (
    <View className=" gap-4 p-4">
                <View className="flex flex-row justify-between items-center ">
                   <Link className="flex-row place-items-start" href='/(home)' asChild>
                      <Ionicons name="arrow-back" size={25} />
                   </Link>   
                </View>
                <View className="flex-1 justify-between items-center">
                    <Text className="text-2xl font-bold">Saved Items</Text>      
                    </View> 
        </View> 
)
}

export default Profile;