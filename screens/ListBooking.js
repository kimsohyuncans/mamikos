import React, { Component } from 'react';
import { Image, 
        View, 
        ScrollView,
        StyleSheet
      } from 'react-native';
import { Container, 
        Header, 
        Content, 
        Footer, 
        Left,
        Right,
        FooterTab, 
        Button, 
        Icon, 
        Text, 
        Badge,
        Item,
        Input,
        DatePicker,
        ListItem,
        Body
       } from 'native-base';
 import { CheckBox } from 'react-native-elements'
       
export default class ListBookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
    this.previousPage = this.previousPage.bind(this)
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  static navigationOptions = {
    header: null
  }


  previousPage() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    return (
      <Container>
         {/* HEADER */}
         <Header searchBar rounded style={{backgroundColor: '#0baa56', elevation: 0, borderBottomWidth: 0}} androidStatusBarColor="#0baa56">
          <Left style={{marginLeft: -10}}>
            <Button style={{backgroundColor: '#0baa56', elevation: 0}} onPress={() => this.previousPage()}>
            <Icon style={{color: 'white'}} name="arrow-back" />
            </Button>
          </Left>
          <Item style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#0baa56'}}>
            <Text style={{color: 'white', fontFamily: 'Lato-Semibold', marginLeft: -100, fontSize: 18}}>Booking</Text>
          </Item>
        </Header>
        <View style={{backgroundColor: 'white', height: 1}}/>
        <Content>
         
          <ScrollView vertical>

          {/* LIST BOOKING */}
          <View style={{backgroundColor: 'white', height: 190}}> 
            <View elevation={10} style={styles.Shadowbox} style={{marginHorizontal: 20, backgroundColor: 'white', height: 150, marginTop: 20, borderRadius: 10, flexDirection: 'row'}}>
            <Image source={require('../src/img/list/kost1.jpg')} style={{width: "100%", height: '100%', resizeMode: "cover", flex: 1, borderRadius: 10}}/>
              <View style={{backgroundColor: 'white', flex: 2.2, borderRadius: 10, flexDirection: 'column'}}>
                <View style={{backgroundColor: 'white', flex: 1, borderRadius: 10}}>
                <Text ellipsizeMode='tail' numberOfLines={1}  style={{fontFamily: 'Lato-Bold', marginTop: 20, marginLeft: 10, fontSize: 14}}>
                Kost Arkademy Putra Bintaro Tangerang
                </Text>
                </View>
                <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'row'}}>
                <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
                <Text style={{fontFamily: 'Lato-Regular', marginTop: 7, marginLeft: 10, fontSize: 13}}>
                Booking
                </Text>
                <Text style={{fontFamily: 'Lato-Regular', marginTop: 0, marginLeft: 10, fontSize: 13}}>
                18 Agu 2019
                </Text>
                </View>
                <View style={{backgroundColor: 'white', flex: 1.3, flexDirection: 'column'}}>
                <Text style={{fontFamily: 'Lato-Regular', marginTop: 7, marginLeft: 10, fontSize: 13}}>
                Durasi Sewa
                </Text>
                <Text style={{fontFamily: 'Lato-Regular', marginTop: 0, marginLeft: 10, fontSize: 13}}>
                1 bulan
                </Text>
                </View>
                </View>
                <View style={{backgroundColor: 'white', flex: 1, borderRadius: 10}}>
                <Button style={{borderRadius: 10, height: 30, width: 160, marginRight:5, marginTop: 10, marginLeft: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#77daf6'}}>
              <Text style={{color: '#77daf6', fontSize: 14, fontFamily: 'Lato-Semibold', justifyContent: 'center', textAlign: 'center', alignItems: 'center'}} uppercase={false}>
                Tunggu Konfirmasi
              </Text>
            </Button>
                </View>
              </View>   
            </View>
          </View>

         {/* LIST BOOKING */}
         <View style={{backgroundColor: 'white', height: 190}}> 
            <View elevation={10} style={{marginHorizontal: 20, backgroundColor: 'white', height: 150, marginTop: 20, borderRadius: 10, flexDirection: 'row'}}>
            <Image source={require('../src/img/list/kost2.jpg')} style={{width: "100%", height: '100%', resizeMode: "cover", flex: 1, borderRadius: 10}}/>
              <View style={{backgroundColor: 'white', flex: 2.2, borderRadius: 10, flexDirection: 'column'}}>
                <View style={{backgroundColor: 'white', flex: 1, borderRadius: 10}}>
                <Text ellipsizeMode='tail' numberOfLines={1}  style={{fontFamily: 'Lato-Bold', marginTop: 20, marginLeft: 10, fontSize: 14}}>
                Kost Arkademy Putra Bintaro Tangerang
                </Text>
                </View>
                <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'row'}}>
                <View style={{backgroundColor: 'white', flex: 1, flexDirection: 'column'}}>
                <Text style={{fontFamily: 'Lato-Regular', marginTop: 7, marginLeft: 10, fontSize: 13}}>
                Booking
                </Text>
                <Text style={{fontFamily: 'Lato-Regular', marginTop: 0, marginLeft: 10, fontSize: 13}}>
                18 Agu 2019
                </Text>
                </View>
                <View style={{backgroundColor: 'white', flex: 1.3, flexDirection: 'column'}}>
                <Text style={{fontFamily: 'Lato-Regular', marginTop: 7, marginLeft: 10, fontSize: 13}}>
                Durasi Sewa
                </Text>
                <Text style={{fontFamily: 'Lato-Regular', marginTop: 0, marginLeft: 10, fontSize: 13}}>
                1 bulan
                </Text>
                </View>
                </View>
                <View style={{backgroundColor: 'white', flex: 1, borderRadius: 10}}>
                <Button style={{borderRadius: 10, height: 30, width: 160, marginRight:5, marginTop: 10, marginLeft: 10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#0baa56'}}>
              <Text style={{color: '#0baa56', fontSize: 14, fontFamily: 'Lato-Semibold', justifyContent: 'center', textAlign: 'center', alignItems: 'center'}} uppercase={false}>
                Confirmed
              </Text>
            </Button>
                </View>
              </View>   
            </View>
          </View>

        </ScrollView>   
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textsemibold: {
    fontFamily: 'Lato-Semibold'
  },

  textbold: {
    fontFamily: 'Lato-Bold'
  },
  
  textabu: {
    fontFamily: 'Lato-Regular',
    color: '#727272'
  },

  textcheckboxijo: {
    fontFamily: 'Lato-Regular',
    color: '#0baa56',
    justifyContent: 'center', 
    alignItems: 'center',
    textDecorationLine: 'underline'
  },

  textcheckbox: {
    fontFamily: 'Lato-Regular',
    justifyContent: 'center', 
    alignItems: 'center' 
  },


});

