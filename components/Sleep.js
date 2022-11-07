import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView, Alert, Button, ImageBackground, Image,View, TouchableOpacity,initialState } from "react-native";
import { gStyle } from "../styles/styles";


export default function Music({navigation}){
  const loadScene=()=>{
  navigation.navigate('Main')

}
const loadScene1=()=>{
  navigation.navigate('Settings')

}
const loadScene2=()=>{
  navigation.navigate('Profile')
  
}
const loadScene3=()=>{
  navigation.navigate('Music')
  
}
const loadScene4=()=>{
    console.log('Button')
  
  }
   const imagebar = require('../Images/bar.png');
   const list = require('../Images/list.jpg');
   const krug = require('../Images/krug.png');
   const lk = require('../Images/lk.png');
   const toback = require('../Images/streklka2.png')
   const back = require('../Images/mus.png')
   const name = require('../Images/name.png')
   const name1 = require('../Images/name1.png')
   const name2 = require('../Images/name2.png')
   const name3 = require('../Images/name3.png')
   const name4 = require('../Images/name4.png')
   const name5 = require('../Images/name5.png')
   return(
    <SafeAreaView style={gStyle.containersettings}>
      
      <ImageBackground source={back} resizeMode="cover" style={gStyle.image}>
      <Text style={gStyle.music}> Сон</Text>
      <TouchableOpacity style = {gStyle.toback} onPress={loadScene4}>
      <Image 
            source={toback}
            style={gStyle.back} 
            />   
        </TouchableOpacity>

        <TouchableOpacity style = {gStyle.toname} onPress={loadScene3}>
      <Image 
            source={name}
            style={gStyle.name} 
            />   
        </TouchableOpacity>

        <TouchableOpacity style = {gStyle.toname1} onPress={loadScene4}>
      <Image 
            source={name1}
            style={gStyle.name1} 
            />   
        </TouchableOpacity>
        
        <TouchableOpacity style = {gStyle.toname2} onPress={loadScene4}>
      <Image 
            source={name2}
            style={gStyle.name2} 
            />   
        </TouchableOpacity>
        

        <TouchableOpacity style = {gStyle.toname3} onPress={loadScene4}>
      <Image 
            source={name3}
            style={gStyle.name3} 
            />   
        </TouchableOpacity>


        <TouchableOpacity style = {gStyle.toname4} onPress={loadScene4}>
      <Image 
            source={name4}
            style={gStyle.name4} 
            />   

            
        </TouchableOpacity>
        <TouchableOpacity style = {gStyle.toname5} onPress={loadScene4}>
      <Image 
            source={name5}
            style={gStyle.name5} 
            />   

            
        </TouchableOpacity>
        
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
         
        
        
        
        
        
    </ImageBackground>
    </SafeAreaView>
   )
  }
