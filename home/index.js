import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Home({ navigation }){
        

    return (
        <View>
<Text style={{marginLeft:120,fontSize:16,fontWeight:'bold',marginTop:50}}>who are youu</Text>
        <View style={style.pag}>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}>Roberval</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}>Ricardo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}>Manuel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}>José</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Entregas') }}>
                
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}>Rosângela</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}