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
  console.log("Концентрация")
  
}
const loadScene4=()=>{
  navigation.navigate('Sleep')
  
}
   const imagebar = require('../Images/bar.png');
   const list = require('../Images/list.jpg');
   const krug = require('../Images/krug.png');
   const lk = require('../Images/lk.png');
   const toback = require('../Images/streklka2.png')
   const back = require('../Images/mus.png')
   const cons = require('../Images/Cons.png')
   const son = require('../Images/son.png')
   const son3 = require('../Images/son3.png')
   const son4 = require('../Images/son4.png')
   const relax= require('../Images/relax.png')
   const relax2= require('../Images/relax2.png')
   const Searchbar = require('../Images/Searchbar.png')
   return(
    <SafeAreaView style={gStyle.containersettings}>
      
      <ImageBackground source={back} resizeMode="cover" style={gStyle.image}>
      <Text style={gStyle.music}> Музыка </Text>
      <TouchableOpacity style = {gStyle.searchv} onPress={loadScene3}>
      <Image 
            source={Searchbar}
            style={gStyle.searchbar} 
            />   
        </TouchableOpacity>
      <TouchableOpacity style = {gStyle.toback} onPress={loadScene}>
      <Image 
            source={toback}
            style={gStyle.back} 
            />   
        </TouchableOpacity>
        
        
        <TouchableOpacity style={gStyle.tocons}  onPress={loadScene3}>
      <Image 
            source={cons}
            style={gStyle.cons} 
            />   
        </TouchableOpacity>
        <TouchableOpacity style={gStyle.toson}  onPress={loadScene4}>
      <Image 
            source={son}
            style={gStyle.son} 
            />   
        </TouchableOpacity>
        <TouchableOpacity style={gStyle.toson4}  onPress={loadScene3}>
      <Image 
            source={relax2}
            style={gStyle.son4} 
            />   
        </TouchableOpacity>

        <TouchableOpacity style={gStyle.toson3}  onPress={loadScene3}>
      <Image 
            source={son3}
            style={gStyle.son3} 
            />   
        </TouchableOpacity>

        <TouchableOpacity style={gStyle.torelax2}  onPress={loadScene3}>
      <Image 
            source={son4}
            style={gStyle.relax2} 
            />   
        </TouchableOpacity>

        <TouchableOpacity style={gStyle.torelax}  onPress={loadScene3}>
      <Image 
            source={relax}
            style={gStyle.relax} 
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