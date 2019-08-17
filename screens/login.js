import React, { Component } from 'react';
import {View , Image, Text,TextInput,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Title,Button,Form,Item,Icon,Input,Label} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import AddAdvertisement from './add-iklan';
import RegisterPage from './register'

class LoginPage extends Component {


  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <KeyboardAwareScrollView>
      <ScrollView>
        <View style={{flex:1,backgroundColor: 'white'}}>

        
          
          <Image source={require('../src/img/login.png')} style={{width:'100%',height: 370}}/>
          <View style= {styles.container}>
            {/*Input Login*/}

            
              <Form style={styles.form}>

                <Item style={styles.item} floatingLabel>
                  <Label style={styles.labelText}>Username</Label>
                  <Input />
                </Item>
                <Item style={styles.item} floatingLabel>
                  <Label style={styles.labelText}>Password</Label>
                  <Input />
                </Item>
              </Form>
            

            <Button onPress={() => this.props.navigation.navigate('Home')} style={styles.button}>
                <Text style={styles.loginText}>Login</Text>    
            </Button>
            <View style={{flexDirection: 'row',marginBottom: 20}}>
              <Text style={styles.policy2}> Don't have an account ? </Text>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('register')}>
                  <Text style={styles.policy}> Register </Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      </KeyboardAwareScrollView>
      
      
    );
  }
}


export default LoginPage

const styles = StyleSheet.create({
  container : { 
    flex:1,
    alignItems:'center',
    backgroundColor:'white'
    },

    banner : {
      width: '100%',
      height: '45%'
    },

    form : { width:'65%' },

    item : {
      marginTop:'20%',
      borderBottomColor: '#0baa56',
      borderBottomWidth: 1, 
    },

    labelText : {color:'#a6a6a6'},

    button : {
      width: '65%',
      flex:0.8,
      backgroundColor: '#39bd77',
      marginTop:'20%',
      justifyContent:'center',
      borderRadius: 20,
      alignItems:'center',
    },

    loginText : {
      color:'white',
      fontSize: 20,
      marginBottom: '5%'
    },

    policy : {
      color:'#0baa56',
      textDecorationLine:'underline',
      marginTop:20
    },

    policy2 : {
      color:'gray',
      marginTop:20
    }

})