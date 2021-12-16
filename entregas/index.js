import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style.js'
export default function Entregas({ navigation }){

    return (
        <View>
            <View style={style.pag}>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}>Rua que sobe e desce, 25, Jaguariúna"</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                
                <Text style={{margin:12,fontSize:16,fontWeight:'bold'}}>Rua que sobe e desce, 258, Jaguariúna</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.menu} onPress={() => { navigation.navigate('Detalhes') }}>
                
                < Text style={{margin:12,fontSize:16,fontWeight:'bold'}}>Rua que sobe e desce, 258, Jaguariúna</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}