import { Image, ImageComponent, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'

import DiceOne from '../assets/d1.png'
import DiceTwo from '../assets/d2.png'
import DiceThree from '../assets/d3.png'
import DiceFour from '../assets/d4.png'
import DiceFive from '../assets/d5.png'
import DiceSix from '../assets/d6.png'

//for haptic feedback copied from there github
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
//for haptic feedback copied from there github


type diceprop = PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice = ({imageUrl}:diceprop) => {
  return(
    <View >
        <Image  style={styles.image}  source={imageUrl}/>
    </View>
  )
}


export default function App() {

const [diceimage,setdiceimage] = useState(DiceOne)

const rolldice = () => {
      let randomnumber = Math.floor(Math.random()*6) + 1 // +1 so that 0 does not come 

      switch(randomnumber){
        case 1 : setdiceimage(DiceOne) 
        break
        case 2 : setdiceimage(DiceTwo) 
        break
        case 3 : setdiceimage(DiceThree) 
        break
        case 4 : setdiceimage(DiceFour) 
        break
        case 5 : setdiceimage(DiceFive) 
        break
        case 6 : setdiceimage(DiceSix) 
        break
        default : setdiceimage(DiceOne)
        break
      }
      ReactNativeHapticFeedback.trigger("impactHeavy", options);
      
}
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceimage}/>
      <Pressable onPress={rolldice}>
        <Text style={styles.text}>Roll the dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    height:200,
    width:200,
    borderRadius:40,
    margin:16,
  
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
    margin:16
  },
})