/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {useState} from 'react';
import {
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const App= () =>  {
  const[active_player,setActive_player] =useState('X') //il başta X başlıyor.
  const [markers, setMarkers]= useState([ //Izgarada ki değerler ilk başta null olarak tanımlandı.
    null,null,null,
    null,null,null,
    null,null,null
  ])

  const markPosition = (position)=>{
    if(!markers[position]){
      let temp =[...markers]
    temp[position]= active_player
    setMarkers(temp)
    if(active_player==='X'){ //diğer oyuncuya geçiş
      setActive_player('O')
    }else{
      setActive_player('X')
    }
    }
  }
  const resetMarkers =() =>{ //ekranı temizleme btn fonksiyonu
    setMarkers(
    [null,null,null,
    null,null,null,
    null,null,null]
    )
  }

  const calculatewinner= (squares) => {
    const lines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i=0; i<lines.length;i++){
      const[a,b,c]=lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  useEffect(()=>{
    const winner = calculatewinner(markers);
    if(winner === 'X'){
      alert("KAZANAN X :)")
      resetMarkers()
    }else if(winner==='O'){
      alert("KAZANAN O :)")
      resetMarkers()
    }
  },[markers]
  )

  return (
   <SafeAreaView style={styles.body}>
    <View style={[styles.playerInfo, {backgroundColor:active_player ==='X'?'#ffa500':'#1e90ff'}]}>
      <Text style={styles.playerTxt}> Sıra senin {active_player} </Text>
    </View>

    <View style={styles.mainContainer}> 
      {/* Top Left Cell */}
      <Pressable style={styles.cell_top_left} onPress={()=>markPosition(0)}>
        {markers[0]=='X'&& <Image source={require('./assets/img/cross.png')} style={styles.icon}/>}
        {markers[0]=='O'&& <Image source={require('./assets/img/circle.png')} style={styles.icon}/>}
      </Pressable>

      {/* Top Mid Cell */}
      <Pressable style={styles.cell_top_mid} onPress={()=>markPosition(1)}>
        {markers[1]=='X'&& <Image source={require('./assets/img/cross.png')} style={styles.icon}/>}
        {markers[1]=='O'&& <Image source={require('./assets/img/circle.png')} style={styles.icon}/>}
      </Pressable>

      {/* Top Right Cell */}
      <Pressable style={styles.cell_top_right} onPress={()=>markPosition(2)}>
        {markers[2]=='X'&& <Image source={require('./assets/img/cross.png')} style={styles.icon}/>}
        {markers[2]=='O'&& <Image source={require('./assets/img/circle.png')} style={styles.icon}/>}
      </Pressable>

      {/* Mid Left Cell */}
      <Pressable style={styles.cell_mid_left} onPress={()=>markPosition(3)}>
        {markers[3]=='X'&& <Image source={require('./assets/img/cross.png')} style={styles.icon}/>}
        {markers[3]=='O'&& <Image source={require('./assets/img/circle.png')} style={styles.icon}/>}
      </Pressable>

      {/* Mid Mid Cell */}
      <Pressable style={styles.cell_mid_mid} onPress={()=>markPosition(4)}>
        {markers[4]=='X'&& <Image source={require('./assets/img/cross.png')} style={styles.icon}/>}
        {markers[4]=='O'&& <Image source={require('./assets/img/circle.png')} style={styles.icon}/>}
      </Pressable>

      {/* Mid Right Cell */}
      <Pressable style={styles.cell_mid_right} onPress={()=>markPosition(5)}>
        {markers[5]=='X'&& <Image source={require('./assets/img/cross.png')} style={styles.icon}/>}
        {markers[5]=='O'&& <Image source={require('./assets/img/circle.png')} style={styles.icon}/>}
      </Pressable>

      {/* Right Top Cell */}
      <Pressable style={styles.cell_bottom_left} onPress={()=>markPosition(6)}>
        {markers[6]=='X'&& <Image source={require('./assets/img/cross.png')} style={styles.icon}/>}
        {markers[6]=='O'&& <Image source={require('./assets/img/circle.png')} style={styles.icon}/>}
      </Pressable>

      {/* Right Mid Cell */}
      <Pressable style={styles.cell_bottom_mid} onPress={()=>markPosition(7)}>
        {markers[7]=='X'&& <Image source={require('./assets/img/cross.png')} style={styles.icon}/>}
        {markers[7]=='O'&& <Image source={require('./assets/img/circle.png')} style={styles.icon}/>}
      </Pressable>

      {/* Right Left Cell */}
      <Pressable style={styles.cell_bottom_right} onPress={()=>markPosition(8)}>
        {markers[8]=='X'&& <Image source={require('./assets/img/cross.png')} style={styles.icon}/>}
        {markers[8]=='O'&& <Image source={require('./assets/img/circle.png')} style={styles.icon}/>}
      </Pressable>
      
    </View>

    <Pressable style={styles.cancelBTN} onPress={resetMarkers}>
      <Image source={require('./assets/img/restart.png')} style={styles.cancelIcon} />
    </Pressable>

   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:"#fff"
  },
  playerInfo:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:40,
    marginRight:40,
    marginTop:40,
    paddingVertical:20,
    borderRadius:250
  },
  playerTxt:{
    fontSize:20,
    fontWeight:'700',
    letterSpacing:1.5,
    color:"#fff"
  },
  mainContainer:{
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap',
    marginTop:50,
  },
  cell_top_left:{
    width:windowWidth/3.5,
    height:windowWidth/3.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:6,
    borderBottomWidth:6,
    borderColor:'#a0522d'
  },
  cell_top_mid:{
    width:windowWidth/3.5,
    height:windowWidth/3.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:6,
    borderColor:'#a0522d'
  },
  cell_top_right:{
    width:windowWidth/3.5,
    height:windowWidth/3.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderLeftWidth:6,
    borderBottomWidth:6,
    borderColor:'#a0522d'
  },
  cell_mid_left:{
    width:windowWidth/3.5,
    height:windowWidth/3.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:6,
    borderColor:'#a0522d'
  },
  cell_mid_mid:{
    width:windowWidth/3.5,
    height:windowWidth/3.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  cell_mid_right:{
    width:windowWidth/3.5,
    height:windowWidth/3.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderLeftWidth:6,
    borderColor:'#a0522d'
  },
  cell_bottom_right:{
    width:windowWidth/3.5,
    height:windowWidth/3.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderLeftWidth:6,
    borderTopWidth:6,
    borderColor:'#a0522d'
  },
  cell_bottom_left:{
    width:windowWidth/3.5,
    height:windowWidth/3.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRightWidth:6,
    borderTopWidth:6 ,
    borderColor:'#a0522d'
  },
  cell_bottom_mid:{
    width:windowWidth/3.5,
    height:windowWidth/3.5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderTopWidth:6,
    borderColor:'#a0522d'
  },
  icon:{
    height:100,
    width:100
  },
  cancelBTN:{
    position:'absolute',
    bottom:40,
    right:40
  },
  cancelIcon:{
    height:60,
    width:60
  }
});

export default App;
