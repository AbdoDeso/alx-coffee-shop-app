import { Ionicons } from "@expo/vector-icons";
import { Link } from 'expo-router';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    ImageBackground
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";  
import { styles } from "../styles/_mainstyle";

import "../global.css";
const Home = () => {
  return (
<SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/delivery/map.png")}
          style={styles.background}
          resizeMode="cover"
         >
    <View className=" gap-4 p-4">
                <View className="flex flex-row ">
                     <Link  href='/order' asChild>
                       <Ionicons name="arrow-back" size={25} />
                     </Link>   
                     <View className="flex-1 justify-center items-center">
                         <Text className="text-2xl font-bold" >Delivery</Text>
                     </View>
                </View>
               
            </View>
          

          <View style={styles.textGroup}>
           <Image source={require("../assets/images/delivery/details.png")} />
          </View>
         
       </ImageBackground>

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
};

export default Home;
