import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import "../../global.css"
import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const HomeRootLayout = () => {
  return (
    
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#34967C',
        headerShown: false,
        
    }} >
        
      <Tabs.Screen name="index" options={{
        title: 'Home',
        headerShown: false,

        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-variant" size={24} color="green" />,
      }} />
     
      <Tabs.Screen name="saved" options={{
        title: 'Saved',
        headerShown: false,
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cards-heart" size={24} color="black" />
      }} />
        <Tabs.Screen name="inbox" options={{
        title: 'Inbox',
        headerShown: false,
        tabBarIcon: ({ color }) => <FontAwesome name="shopping-bag" size={24} color="black" />
      }} />
        <Tabs.Screen name="purchases" options={{
        title: 'Purchases',
        headerShown: false,

        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cash-fast" size={24} color="black" />
      }} />
      
    </Tabs>
  )
}

export default HomeRootLayout;