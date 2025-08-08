import { Ionicons } from "@expo/vector-icons";
import { Link } from 'expo-router';
import {
    Image,
    Text,
    View
} from "react-native";
import { styles } from "../styles/_mainstyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import "../global.css";
const Home = () => {
  return (
    <View className=" gap-4 p-4">
            <View >
                <View className="flex flex-row ">
                     <Link  href='/Details' asChild>
                       <Ionicons name="arrow-back" size={25} />
                     </Link>   
                     <View className="flex-1 justify-center items-center">
                         <Text className="text-2xl font-bold" >Order</Text>
                     </View>
                </View>
               
            </View>
               
            <View className=" gap-4  justify-between items-center  ">
                <Image
                  source={require("../assets/images/order/address.png")} />
              <View>
                <Image source={require("../assets/images/order/checkout.png")} />
               </View>
               <View>
                  <Image source={require("../assets/images/order/discount.png")} />
               </View>
               <View>
                  <Image source={require("../assets/images/order/paysummary.png")} />
               </View>
                <View>
                    <Link   href={'/Delivery'}>
                         <Image source={require("../assets/images/order/paybutton.png")} />
                    </Link>
               </View>
            </View>

          
      </View>

  );
};

export default Home;
