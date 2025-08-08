import PropertyListing from "@/components/PropertyListing";
import { styles } from "../styles/_mainstyle";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { Link } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

import "../global.css"
const Home = () => {
  return (
    <View className=" gap-4 p-4">
                
                <View className="flex flex-row justify-between items-center ">
                      <Link className="flex-row place-items-start" href='/(home)' asChild>
                      <Ionicons name="arrow-back" size={25} />
                   </Link>   
                  <Text className="text-2xl font-bold"  >Detail</Text>
                   <AntDesign name="hearto" size={24} color="black" />
                </View>

               
            <View className=" gap-4  justify-between items-center  ">
                <Image
                  source={require("../assets/images/details/top.png")} />
              <View>
                <Image source={require("../assets/images/details/product.png")} />
               </View>
               <View>
                  <Image source={require("../assets/images/details/description.png")} />
               </View>
               <View className="mt-4">
                <Link href={'/order'} >
                  <Image source={require("../assets/images/details/button.png")} />
                </Link>
               </View>
            </View>

          
      </View>

  );
};

export default Home;
