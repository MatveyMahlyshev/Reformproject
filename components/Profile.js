import React from "react";
import { StyleSheet, Text, SafeAreaView, Alert, Button, ImageBackground, Image,View, TouchableOpacity } from "react-native";
import { gStyle } from "../styles/styles";
export default function Profile({navigation}){
const loadScene=()=>{
  navigation.navigate('Main')

}
const loadScene1=()=>{
  navigation.navigate('Settings')

}
const loadScene2=()=>{
  navigation.navigate('Profile')
  
}
   const imagebar = require('../Images/bar.png');
   const list = require('../Images/list.jpg');
   const krug = require('../Images/krug.png');
   const lk = require('../Images/lk.png');
   const dinans = require('../Images/dinans.png')
   const indicators = require('../Images/indicators.png')
   return(
    <SafeAreaView style={gStyle.containersettings}>
        
        <Text style={gStyle.Settings}>Профиль</Text>
        <Image 
            source={dinans} 
            style = {gStyle.dinans}
            />
        <Image 
            source={indicators} 
            style = {gStyle.indicators}
            />
      
        
      
        <View ></View> 
        <View></View>  
       
        <View style={gStyle.viewst3} />
        <Image source={imagebar} style={gStyle.bar} /> 
        
        <TouchableOpacity  style = {gStyle.to} onPress={loadScene}>
            <Image 
            source={krug} 
            style={gStyle.home}
            />
        </TouchableOpacity> 
     
     
          <TouchableOpacity  style = {gStyle.to1} onPress={loadScene1}>
              <Image 
              source={list}
              style={gStyle.list1}/>
          </TouchableOpacity>
      
      
          <TouchableOpacity  style = {gStyle.to2} onPress={loadScene2}>
                <Image source={lk}
                style={gStyle.lkk} />
            </TouchableOpacity>
         
        
        
        
        
        
    
    </SafeAreaView>
   )
  }