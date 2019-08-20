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
        Text, 
        Badge,
        Icon
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

        {/* HEADER */}
        <Header style={styles.bgwhite} androidStatusBarColor='#0baa56'>
          <Left style={styles.headermarginl}>
            <Button style={styles.buttonheader} onPress={this.previousPage}>
              <Icon style={styles.headericon} name="arrow-back" />
            </Button>
          </Left>
          <Right style={styles.headermarginr}>
            <Button style={styles.buttonheader}>
              <Icon style={styles.headericon} name="md-heart" />
            </Button>
            <Button style={styles.buttonheader}>
              <Icon style={styles.headericon} name="md-share" />
            </Button>
          </Right>
        </Header>

        {/* KONTEN */}
        <Content>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor: 'white', height: 210}}>
            <Image source={require('../src/img/list/kost1.jpg')} style={{height: 230, flex: 1, width: null}}/>
          </View>
          <View style={{backgroundColor: '#252525', flexDirection: 'row'}}>
          <View style={{flex:1}}>
            <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
              <Image source={require('../src/icon/detailkost/image.png')} style={{height: 50, flex: 1, width: null}}/>
            </Button>
          </View>
        <View style={{flex:1}}>
          <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
            <Image source={require('../src/icon/detailkost/peta.png')} style={{height: 50, flex: 1, width: null}}/>
          </Button>
        </View>
        <View style={{flex:1}}>
          <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
            <Image source={require('../src/icon/detailkost/360.png')} style={{height: 50, flex: 1, width: null}}/>
          </Button>
        </View>
            <View style={{flex:1}}>
            <Button style={{backgroundColor: 'black', justifyContent: 'center'}}>
            <Image source={require('../src/icon/detailkost/video.png')} style={{height: 50, flex: 1, width: null}}/>
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
          <View style={{backgroundColor: '#dbdbdb', height: 1, marginHorizontal: 20}}>
          </View>

          {/* TIDAK TERMASUK TIDAK ADA */}
          <View style={{backgroundColor: 'white', height: 40, justifyContent: 'center', marginTop: 5}}>
          <View style={{flexDirection: 'row',marginTop: 0}}>
           
         
              <Text style={{color: 'black', marginLeft: 20, fontFamily: 'Lato-Regular', fontSize: 15}}>
              <Image source={require('../src/icon/detailkost/listrik.png')} style={{height: 18,width: 18}}/>{" Tidak Termasuk Listrik"}
              </Text>       
              
            
              <Text style={{color: 'black', marginLeft: 20, fontFamily: 'Lato-Regular', fontSize: 15}}>
              <Image source={require('../src/icon/detailkost/bayar.png')} style={{height: 18,width: 18}}/>{" Tidak ada min. bayar"}
              </Text>       
              </View>
          </View>

           {/* GARIS GRAY */}
           <View style={{backgroundColor: '#dbdbdb', height: 1, marginHorizontal: 20, marginTop: 5}}/>

          
          <View style={{backgroundColor: 'white', height: 230}}>

          {/* LUAS KAMAR */}
            <View>
            <Text style={{color: 'black', marginTop: 10, marginLeft: 20, fontFamily: 'Lato-Semibold', fontSize: 20}}>
                Luas Kamar
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 20}}>
            <Icon style={styles.headericon} name="md-expand" />
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
                  Kos yang sangat nyaman gak bikin kembung, sangat berdekatan dengan warteg dan hanya lima menit ke rumah Lucinta Luna
                </Text>
              </View>
            </View>
            </View>

           {/* KOS MENARIK */}
           <View style={{backgroundColor: 'white', height: 260, marginHorizontal: 20, marginTop: 30}}>
            <Text style={{color: 'black', fontFamily: 'Lato-Semibold', fontSize: 20}}>
              Kos Menarik Lainnyaa  
            </Text>
              {/* GARIS GRAY */}
            <View style={{backgroundColor: '#dbdbdb', height: 1, marginTop: 5}}/>

              {/* LIST KOST MENARIK */}
              <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={{flexDirection: 'row'}}>

                    {/* LOOP HERE */}
                    <View style={{flex: 0.8, backgroundColor: 'white', marginLeft: 0, height: 180, width: 180, marginTop: 10, borderRadius: 5}}>
                      <View style={{backgroundColor: 'white', height: 30}}>
                        <Button style={{width: 180, height: 30, borderRadius: 5, backgroundColor: 'white', borderColor: '#0baa56', justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
                          <Text style={{color: '#0baa56', fontFamily: 'Lato-Regular'}}>Ada 10 Kamar</Text>
                        </Button>
                        <Image source={require('../src/img/list/kost1.jpg')} style={{height: 150, width: 180, resizeMode: 'cover', borderRadius: 5}}/>
                        <View style={{backgroundColor: 'black', opacity: 0.5, height: 50, marginTop: -50, flexDirection: 'column', borderRadius: 5}}>
                        </View>
                        <View style={{marginTop: -50, marginLeft: 5, borderRadius: 5}}>
                          <Text style={{color: 'white', fontFamily: 'Lato-Regular', fontSize: 18}}>{"  Rp.800..."}</Text>
                          <Text style={{color: 'white', fontFamily: 'Lato-Regular', fontSize: 18}}>Kost Arkademy Putra</Text>
                        </View>
                        <View style={{marginTop: -47, marginLeft: 95, borderRadius: 5}}>
                          <View style={{backgroundColor: '#9b59b6', height: 23, width: 75, borderRadius: 5}}>
                            <Text style={{marginLeft: 3, fontFamily: 'Lato-Regular', color: 'white'}}>
                              CAMPUR
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                   {/* END LOOP HERE */}

                    {/* LOOP HERE */}
                    <View style={{flex: 0.8, backgroundColor: 'white', marginLeft: 10, height: 180, width: 180, marginTop: 10, borderRadius: 5}}>
                      <View style={{backgroundColor: 'white', height: 30}}>
                        <Button style={{width: 180, height: 30, borderRadius: 5, backgroundColor: 'white', borderColor: '#ec7e2f', justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
                          <Text style={{color: '#ec7e2f', fontFamily: 'Lato-Regular'}}>Tinggal 1 kamar</Text>
                        </Button>
                        <Image source={require('../src/img/list/kost2.jpg')} style={{height: 150, width: 180, resizeMode: 'cover', borderRadius: 5}}/>
                        <View style={{backgroundColor: 'black', opacity: 0.5, height: 50, marginTop: -50, flexDirection: 'column', borderRadius: 5}}>
                        </View>
                        <View style={{marginTop: -50, marginLeft: 5, borderRadius: 5}}>
                          <Text style={{color: 'white', fontFamily: 'Lato-Regular', fontSize: 18}}>{"  Rp.800.0..."}</Text>
                          <Text style={{color: 'white', fontFamily: 'Lato-Regular', fontSize: 18}}>Kost Arkademy Putra</Text>
                        </View>
                        <View style={{marginTop: -47, marginLeft: 110, borderRadius: 5}}>
                          <View style={{backgroundColor: '#4A92E6', height: 23, width: 60, borderRadius: 5}}>
                            <Text style={{marginLeft: 3, fontFamily: 'Lato-Regular', color: 'white'}}>
                              PUTRA
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                   {/* END LOOP HERE */}

                    {/* LOOP HERE */}
                    <View style={{flex: 0.8, backgroundColor: 'white', marginLeft: 10, height: 180, width: 180, marginTop: 10, borderRadius: 5}}>
                      <View style={{backgroundColor: 'white', height: 30}}>
                        <Button style={{width: 180, height: 30, borderRadius: 5, backgroundColor: 'white', borderColor: '#0baa56', justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
                          <Text style={{color: '#0baa56', fontFamily: 'Lato-Regular'}}>Ada 10 Kamar</Text>
                        </Button>
                        <Image source={require('../src/img/list/kost3.jpg')} style={{height: 150, width: 180, resizeMode: 'cover', borderRadius: 5}}/>
                        <View style={{backgroundColor: 'black', opacity: 0.5, height: 50, marginTop: -50, flexDirection: 'column', borderRadius: 5}}>
                        </View>
                        <View style={{marginTop: -50, marginLeft: 5, borderRadius: 5}}>
                          <Text style={{color: 'white', fontFamily: 'Lato-Regular', fontSize: 18}}>{"  Rp.800.00..."}</Text>
                          <Text style={{color: 'white', fontFamily: 'Lato-Regular', fontSize: 18}}>Kost Arkademy Putri</Text>
                        </View>
                        <View style={{marginTop: -47, marginLeft: 115, borderRadius: 5}}>
                          <View style={{backgroundColor: '#FF5492', height: 23, width: 55, borderRadius: 5}}>
                            <Text style={{marginLeft: 3, fontFamily: 'Lato-Regular', color: 'white'}}>
                              PUTRI
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                   {/* END LOOP HERE */}
                  
                




                    
                  </View>
                </ScrollView>
              </View>

               {/* GARIS GRAY */}
            <View style={{backgroundColor: '#dbdbdb', height: 1, marginTop: 15}}/>

           </View>
          
        </ScrollView>
        </Content>

        {/* FOOTER */}
        <Footer style={styles.footerbg}>
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

const styles = StyleSheet.create({

  bgwhite : { 
    backgroundColor: 'white'
  },

  headermarginl : { 
    marginLeft: -10
  },

  buttonheader : { 
    backgroundColor: 'white', 
    elevation: 0
  },
  
  headericon : {
    color: '#0baa56'
  },

  headermarginr : {
    marginRight: -10
  },
  
  footerbg : {
    borderTopColor: '#DCDCDC', 
    borderTopWidth: 1
  },

  

});
