import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Detalhes({ navigation }){

    return (
        <View >
             <View>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
            <Text style={{margin:12,fontSize:16, backgroundColor:'grey'}}>Jacinto Pena</Text>
            <Text style={{margin:12,fontSize:16, backgroundColor:'grey'}}>Pão de queijo</Text>
            <Text style={{margin:12,fontSize:16, backgroundColor:'grey'}}>3.5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
            <Text style={{margin:12,fontSize:16, backgroundColor:'red'}}>Passos Dias aguiar</Text>
            <Text style={{margin:12,fontSize:16, backgroundColor:'red'}}>Pão de queijo</Text>
            <Text style={{margin:12,fontSize:16, backgroundColor:'red'}}> 3.5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
            <Text style={{margin:12,fontSize:16, backgroundColor:'blue'}}>Simone Silva</Text>
            <Text style={{margin:12,fontSize:16, backgroundColor:'blue'}}>Pão de queijo</Text>
            <Text style={{margin:12,fontSize:16, backgroundColor:'blue'}}> 3.5</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}