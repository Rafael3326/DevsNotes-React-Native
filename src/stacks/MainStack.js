import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import listScreen from "../pages/listScreen";
import EditNoteScreen from "../pages/EditNoteScreen";


const MainStack = createNativeStackNavigator()

export default () => (

    <MainStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#222'
        },
        headerTintColor: '#FFF'
    }}>
        <MainStack.Screen name="List"  component={listScreen} />
        <MainStack.Screen name="EditNote" component={EditNoteScreen}/>
    </MainStack.Navigator>

)