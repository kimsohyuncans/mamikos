import React, { Component } from 'react';
import MapView, {Marker,Geojson} from 'react-native-maps';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'




export default class Map extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} style={{flex:1}} >

        <Marker 
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324
        }}
        title="anjayy"
        description="anjayyyyyyy"
        draggable
        onDragEnd={(e) => alert(e.nativeEvent.coordinate)}>

          <Image source={require('../src/icon/pin3.png')} style={{height: 50,width: 50,resizeMode:'contain'}} />

        </Marker>

        </MapView>
   
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});