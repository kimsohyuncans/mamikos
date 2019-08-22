import React, { Component } from 'react';
import MapView, {Marker,Geojson} from 'react-native-maps';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'




export default class Map extends Component{

  getCordinate(e){
    e.persist();
    e.nativeEvent;
  }
  
  render(){
    return(
      <View style={{flex:1}}>
        <MapView
        initialRegion={{
          latitude: -6.301486201275736,
          longitude: 106.73522774610166,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} style={{flex:1}} >

        <Marker 
        coordinate={{
          latitude: -6.301486201275736,
          longitude: 106.73522774610166
        }}
        title="Mampikos Maps"
        description="Mencari lokasi kos terdekat dari sini"
        showsUserLocation={true}
        showsCompass={true}
        showsTraffic={true}
        draggable
        onDragEnd={(s) => alert("latitude : "+s.nativeEvent.coordinate.latitude+"\nlongitude : "+s.nativeEvent.coordinate.longitude)}>

          <Image source={require('../src/icon/pin3.png')} style={{height: 55,width: 50,resizeMode:'stretch'}} />

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