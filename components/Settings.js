import React from "react";
import { StyleSheet, Text, SafeAreaView, Alert, Button, ImageBackground, Image,View,TouchableOpacity,Switch } from "react-native";
import { gStyle } from "../styles/styles";
import { useState } from "react";
export default function Settings({navigation}){
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  
  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
  
  
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
    console.log('strelka')
    
  }

   const imagebar = require('../Images/bar.png');
   const list = require('../Images/list.jpg');
   const krug = require('../Images/krug.png');
   const lk = require('../Images/lk.png');
   const strelka = require('../Images/strelka.png');

   return(
    
    <SafeAreaView style={gStyle.containersettings}>
     <Text style={gStyle.Settings}>Настройки</Text>  
     <Text style={gStyle.notifications}>Уведомления</Text> 
     <Text style={gStyle.smth}>Что-то</Text>
     <Text style={gStyle.smth1}>Что-то</Text>
     <Text style={gStyle.smth2}>Что-то</Text>
     <Text style={gStyle.smth3}>Что-то ещё</Text>
     <Text style={gStyle.smth4}>Что-то</Text>
     <Text style={gStyle.smth5}>Что-то</Text>
     <Text style={gStyle.smth6}>Что-то</Text>
     
     

    <ImageBackground  resizeMode="cover" style={gStyle.image}>
    
    <Switch
    style={gStyle.switch}
        trackColor={{ false: "#fff", true: "#fff" }}
        thumbColor={isEnabled ? "#B2A2ED" : "#B2A2ED"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      
      <Switch
    style={gStyle.switch1}
        trackColor={{ false: "#fff", true: "#fff" }}
        thumbColor={isEnabled1 ? "#B2A2ED" : "#B2A2ED"}
        onValueChange={toggleSwitch1}
        value={isEnabled1}
      />
       <Switch
        style={gStyle.switch2}
        trackColor={{ false: "#fff", true: "#fff" }}
        thumbColor={isEnabled2 ? "#B2A2ED" : "#B2A2ED"}
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />

        <Switch
        style={gStyle.switch3}
        trackColor={{ false: "#fff", true: "#fff" }}
        thumbColor={isEnabled1 ? "#B2A2ED" : "#B2A2ED"}
        onValueChange={toggleSwitch3}
        value={isEnabled3}
      />

        <Switch
        style={gStyle.switch4}
        trackColor={{ false: "#fff", true: "#fff" }}
        thumbColor={isEnabled1 ? "#B2A2ED" : "#B2A2ED"}
        onValueChange={toggleSwitch4}
        value={isEnabled4}
      />
      
      
    
    
      <TouchableOpacity style = {gStyle.toaccept} onPress={loadScene}>
             <Text style={gStyle.Accept} >Готово</Text> 
        </TouchableOpacity>
       
       
       
       <TouchableOpacity  style = {gStyle.tostrl} onPress={loadScene3}>
            <Image 
            source={strelka} 
            style={gStyle.strl}
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