import React from "react";
import {Text, SafeAreaView, ImageBackground, Image,View,TouchableOpacity } from "react-native";
import { gStyle } from "../styles/styles";
export default function Main({navigation}){
  
  
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
    console.log('Практика')
    
  }
  const loadScene4=()=>{
    console.log('Диалог')
    
  }
  const loadScene5=()=>{
    console.log('Музыка')
    
  }
  
   
  
   const image = require('../Images/fon.png');
   const imagebar = require('../Images/bar.png');
   const list = require('../Images/list.jpg');
   const krug = require('../Images/krug.png');
   const lk = require('../Images/lk.png');
   const centrbutton = require('../Images/knopka11.png')
   const centrbutton1 = require('../Images/knopka22.png')
   const centrbutton2 = require('../Images/knopka33.png')
   const dialog = require('../Images/Dialog.png')
   const practice = require('../Images/Practice.png')
   
   
   return(
    <SafeAreaView style={gStyle.container}>
        
    <ImageBackground source={image} resizeMode="cover" style={gStyle.image}>
    <Text style={gStyle.text}>Добрый день{'\n'}  USERNAME</Text>
    
        
        <TouchableOpacity   onPress={loadScene3}>
          
           <Image 
            source={centrbutton} 
            style ={gStyle.centrbut}
            
            />
        </TouchableOpacity>
        <TouchableOpacity   onPress={loadScene4}>
           
            <Image 
            source={centrbutton1} 
            style ={gStyle.centrbut1}
            />
        </TouchableOpacity>
        <TouchableOpacity   onPress={loadScene5}>
            <Image 
            source={centrbutton2} 
            style ={gStyle.centrbut2}
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