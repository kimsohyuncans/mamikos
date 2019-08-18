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
        Badge
       } from 'native-base';



export default class DetailPage extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {};

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this)
}

  nextPage(destination) {
    const { navigate } = this.props.navigation; 
    navigate(destination);
  };

  previousPage() {
    const { goBack } = this.props.navigation;
    goBack();
  }



  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'white'}} androidStatusBarColor='#0baa56'>
        <Left style={{marginLeft: -10}}>
            <Button style={{backgroundColor: 'white', elevation: 0}} onPress={() => this.previousPage()}>
            <Icon style={{color: '#0baa56'}} name="arrow-back" />
            </Button>
          </Left>
          <Right style={{marginRight: -10}}>
            <Button style={{backgroundColor: 'white', elevation: 0}}>
            <Icon style={{color: '#0baa56'}} name="md-heart" />
            </Button>
            <Button style={{backgroundColor: 'white', elevation: 0}}>
            <Icon style={{color: '#0baa56'}} name="md-share" />
            </Button>
          </Right>
        </Header>
        <Content>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: 'white', height: 210}}>
        <Image source={require('../src/img/list/kost1.jpg')} style={{height: 230, flex: 1, width: null}}>
        </Image>
        </View>
        <View style={{backgroundColor: '#252525', flexDirection: 'row'}}>
            <View style={{flex:1}}>
            <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
              <Icon name="md-camera" style={{color: 'white'}} ></Icon>
              <Text style={{color: 'white'}}></Text>
            </Button>
            </View>
            <View style={{flex:1}}>
            <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
              <Icon name="md-map" style={{color: 'white'}} />
              <Text style={{color: 'white'}}></Text>
            </Button>
            </View>
            <View style={{flex:1}}>
            <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
              <Icon name="md-calendar" style={{color: 'white'}} />
              <Text style={{color: 'white'}}></Text>
            </Button>
            </View>
            <View style={{flex:1}}>
            <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
              <Icon name="md-person" style={{color: 'white'}} />
              <Text style={{color: 'white'}}></Text>
            </Button>
            </View>
        </View>

        {/* DESKRIPSI SINGKAT */}
        <View style={{backgroundColor: 'white', height: 120}}>
           <View style={{flexDirection: 'row',marginTop: 10}}>
            <Text style={{color: '#4A92E6', marginLeft: 20, fontFamily: 'Lato-Regular', fontSize: 19}}>
              Putra
            </Text>
            <Text style={{color: 'gray', marginLeft: 10}}>
              {'\u2022'}
            </Text>
            <Text style={{color: '#ec7e2f', marginLeft: 10, fontFamily: 'Lato-Regular', fontSize: 18}}>
              Kamar penuh
            </Text>
            </View>
            <View style={{flexDirection: 'row',marginTop: 5}}>
              <Text style={{color: 'black', marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 21}}>
                Kost Arkademy Bintaro
              </Text>       
            </View>
            <View style={{flexDirection: 'row',marginTop: 5}}>
              <Text style={{color: 'black', marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 21}}>
                Bintaro Tangerang
              </Text>       
            </View>
          </View>

          {/* GARIS GRAY */}
          <View style={{backgroundColor: '#bdbdbd', height: 1, marginHorizontal: 20}}>
          </View>

          {/* TIDAK TERMASUK TIDAK ADA */}
          <View style={{backgroundColor: 'white', height: 40, justifyContent: 'center'}}>
          <View style={{flexDirection: 'row',marginTop: 0}}>
              <Text style={{color: 'black', marginLeft: 20, fontFamily: 'Lato-Regular', fontSize: 15}}>
                Tidak Termasuk Listrik
              </Text>       
            
            
              <Text style={{color: 'black', marginLeft: 20, fontFamily: 'Lato-Regular', fontSize: 15}}>
                Tidak ada min. bayar
              </Text>       
              </View>
          </View>

           {/* GARIS GRAY */}
           <View style={{backgroundColor: '#bdbdbd', height: 1, marginHorizontal: 20}}>
          </View>

          
          <View style={{backgroundColor: 'white', height: 230}}>

          {/* LUAS KAMAR */}
            <View>
            <Text style={{color: 'black', marginTop: 10, marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 20}}>
                Luas Kamar
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 20}}>
            <Icon style={{color: '#0baa56'}} name="ios-expand" />
            <Text style={{color: 'black', marginLeft: 10, fontFamily: 'Lato-Regular', fontSize: 18}}>
                3x4 m
            </Text>
            </View>
            </View>

             {/* FASILITAS KOST */}
             <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, alignItems: 'center'}}>
             <Text style={{color: 'black', marginTop: 20, fontFamily: 'Lato-Semibold', fontSize: 20}}>
                Fasilitas kost dan kamar
            </Text>
            <Text style={{color: '#0baa56', marginTop: 20, fontFamily: 'Lato-Regular', fontSize: 16}}>
                Lihat Semua
            </Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', marginTop: 10}}>
            <Image source={require('../src/img/detail/fasilitas.png')} style={{width: 481, height: 100, resizeMode: "contain"}}/>
            <Image source={require('../src/img/detail/fasilitas.png')} style={{width: 481, height: 100, resizeMode: "contain"}}/>
            </ScrollView>
            </View>

            <View>
            {/* DESKRIPSI KOST */}
            <View>
            <Text style={{color: 'black', marginTop: 20, marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 20}}>
                Deskripsi kost
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10, marginHorizontal: 20, flexWrap: 'wrap'}}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nyaman, bikin kenyang, bersih, agak sedikit asin, pedasnya pas
            </Text>
            </View>
            </View>
            </View>

          
        </ScrollView>
        </Content>

        {/* FOOTER */}
        <Footer style={{borderTopColor: '#dcdcdc', borderTopWidth: 1}}>
          <FooterTab style={{backgroundColor: 'white'}}>
            <Left style={{flexDirection: 'column', marginHorizontal: 10}}>
            <Text style={{color: 'black', marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 14}}>
                Rp 800.000 / Bulan
            </Text>
            <Text style={{color: '#0baa56', marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 14}}>
                Lihat semua harga
            </Text>
            </Left>
            <Right style={{flexDirection: 'row', marginHorizontal: 10}}>
            <Button style={{borderRadius: 10, height: 40, width: '50%', marginRight:5 , backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#ec7e2f'}}>
              <Text style={{color: '#ec7e2f', fontSize: 14, fontFamily: 'Lato-Semibold', justifyContent: 'center', textAlign: 'center', alignItems: 'center'}} uppercase={false}>
                Hubungi Kost
              </Text>
            </Button>
            <Button onPress={() => this.nextPage('booking')} style={{borderRadius: 10, height: 40, width: '50%', backgroundColor: '#ec7e2f', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 14, fontFamily: 'Lato-Semibold', textAlign: 'center'}} uppercase={false}>
                Booking
              </Text>
              </Button>
              </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
