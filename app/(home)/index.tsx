import PropertyListing from "@/components/PropertyListing";
import { styles } from "../../styles/_mainstyle";
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
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css"
const Home = () => {
  return (
    <View style={styles.container}>
               
          <View className="flex-col justify-between items-center w-full">
                <Image
                  source={require("../../assets/images/home/Top.png")} />
            <View>
               <Image source={require("../../assets/images/home/Category1.png")} />
            </View>
          <SafeAreaView className="flex-row justify-between items-center pb-1">
          
            <View>
              <Link href={'../Details'}>
                <Image source={require("../../assets/images/home/Product1.png")}  />
              </Link>
            </View>

            <View style={styles.container}>
              <Link href={'../Details'}>
                <Image source={require("../../assets/images/home/Product2.png")}  />
            </Link>
            </View>
          </SafeAreaView>
      </View>

    </View>
  );
};

export default Home;
