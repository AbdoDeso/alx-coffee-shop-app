import {  Text, View, ImageBackground, Dimensions, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";  
import { Link } from 'expo-router';
import { styles } from "../styles/_mainstyle";
export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/welcome/background-image.png")}
          style={styles.background}
          resizeMode="cover"
         >

          <View style={styles.textGroup}>
           <Image source={require("../assets/images/welcome/text.png")} />
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Link href={'/(home)'}>
                <Image source={require("../assets/images/welcome/Button.png")}></Image>
              </Link>
            </TouchableOpacity>
          </View>
       </ImageBackground>

      </SafeAreaView>
    </SafeAreaProvider>
    
  );
  
}