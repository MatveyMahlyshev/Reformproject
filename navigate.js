import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Main from "./components/Main";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Music   from "./components/Music";
import Sleep from "./components/Sleep"

const Stack = createStackNavigator();
export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Main"
            component={Main}
            options={{title:"Главная", headerStyle:{height:0}, headerLeft:()=>null,}}
            />
             <Stack.Screen
            name="Settings"
            component={Settings}
            options={{title:"Настройки", headerStyle:{height:0}, headerLeft:()=>null,}}
            />
             <Stack.Screen
            name="Profile"
            component={Profile}
            options={{title:"Профиль", headerStyle:{height:0}, headerLeft:()=>null,}}
            />
            <Stack.Screen
            name="Music"
            component={Music}
            options={{title:"Музыка", headerStyle:{height:0}, headerLeft:()=>null,}}
            />
            <Stack.Screen
            name="Sleep"
            component={Sleep}
            options={{title:"Сон", headerStyle:{height:0}, headerLeft:()=>null,}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}