import React, { Component } from 'react';
import { Image, 
        View, 
        ScrollView,
        StyleSheet,
        TouchableOpacity,
        FlatList
        } from 'react-native';         

     
import { Container, 
        Header, 
        Item, 
        Input, 
        Icon, 
        Button, 
        Text, 
        Left, 
        Content,
        Tab, 
        Tabs, 
        ScrollableTab,
        TabHeading,
        Spinner
    } from 'native-base';

import Map from './map'   
import Axios from 'axios';

export default class CariKost extends Component {
    constructor(props)
    {
        super(props);
    }
    
    static navigationOptions = {
      header: null
    }

    goBack = () => this.props.navigation.goBack();
  
  
  render() {
    return (
      <Container>

         {/* HEADERNYA BOSQ */}
        <Header searchBar rounded style={{backgroundColor: 'white', elevation: 0, borderBottomWidth: 0}} androidStatusBarColor="#0baa56">
          <Left style={{marginLeft: -10}}>
            <Button style={{backgroundColor: 'white', elevation: 0}} onPress={this.goBack}>
            <Icon style={{color: '#0baa56'}} name="arrow-back" />
            </Button>
          </Left>
          <Item style={{marginLeft: -58, marginRight: 20, borderRadius: 0, borderWidth: 1, borderColor: '#ec7e2f', borderBottomColor: '#0baa56'}}>
            <Icon style={{color: '#ec7e2f'}} name="md-search" />
            <Input placeholder="Contohnya Bintaro Tangerang" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

       <Tabs tabBarUnderlineStyle={{backgroundColor: '#0baa56', height: 2}} renderTabBar={()=> <ScrollableTab  style={{backgroundColor: 'white'}} />} style={{elevation: 0, borderTopWidth: 0, backgroundColor: '#0baa56'}}>
          <Tab heading="Lihat Peta" tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#0baa56', fontFamily: 'Lato-Semibold'}} textStyle={{color: '#0baa56', fontFamily: 'Lato-Semibold'}} tabContainerStyle={{ borderTopWidth: 0}} >
            <LihatPeta />
          </Tab>
          <Tab heading="Daftar Kost" tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#0baa56', fontFamily: 'Lato-Semibold'}} textStyle={{color: '#0baa56', fontFamily: 'Lato-Semibold'}} tabContainerStyle={{ borderTopWidth: 0 }}>
            <SearchKostPage okeoce={this.props.navigation} />  
          </Tab>
        </Tabs>
      </Container>


    );
  }
}

class LihatPeta extends Component {
    render(){
        return(
         <Map />        
        )
    }
}
 
class SearchKostPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            listkost : undefined,
            loading : true
        }
    }

    

    componentWillMount(){
        Axios.get("http://localhost:8080/api/v1/listkost")
        .then(response => {
            this.setState({
                listkost : response.data
            });

            this.setState({
                loading:false
            })
        })
        .catch(err => alert(err.status))
    }

    // handleNavigateDetail(e) {
    //     this.props.okeoce.navigate('detailkost',{
    //         title : e.title
    //     })
    // }

    render(){
        if(this.state.loading == false){
            return(
                <Container>
                    <ScrollView vertical showsVerticalScrollIndicator={false}>
                        <Content>
                            <FlatList
                            data = {this.state.listkost}
                            renderItem ={ ( {item} ) => (
                                
                                <TouchableOpacity  onPress={() => {
                                    this.props.okeoce.navigate('detailkost',  item )}} >
                                    <View style={{backgroundColor: 'white', height: 320, marginTop: 20, marginHorizontal: 10}}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                            <Image source={require('../src/img/list/kost1.jpg')} style={{ width: 330, height: 200, borderRadius: 5, marginHorizontal: 0}}></Image>
                                        </View>
                                        <View style={{flexDirection: 'row', marginTop: 5}}>
                                            <Text style={{color: '#4A92E6', marginLeft: 25}}>
                                                {item.gender}
                                            </Text>
                                            <Text style={{color: 'gray', marginLeft: 10}}>
                                            {'\u2022'}
                                            </Text>
                                            <Text style={{color: '#1BAA56', marginLeft: 10}}>
                                                Ada {item.availablerooms} kamar
                                            </Text>
                                            <Text style={{color: 'gray', marginLeft: 10}}>
                                            {'\u2022'}
                                            </Text>
                                            <Text style={{color: '#3B445B', marginLeft: 10}}>
                                                {item.city}
                                            </Text>
                                        </View>
                                        <View style={{flexDirection: 'row', marginTop: 3}}>
                                            <Text style={{color: '#2E2D39', marginLeft: 25}}>
                                                Rp {item.price} / bulan
                                            </Text>
                                        </View>
                                        <View style={{flexDirection: 'row', marginTop: 3}}>
                                            <Text style={{color: '#383746', marginLeft: 25}}>
                                                {item.title}
                                            </Text>
                                        </View>
                                        <View style={{flexDirection: 'row', marginTop: 5}}>
                                    
                                        <Button disabled={true} style={{borderRadius: 10, marginLeft: 25, height: 30, backgroundColor: '#0BAA56', justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{color: 'white', fontSize: 15, fontFamily: 'Lato-Regular', justifyContent: 'center', alignItems: 'center'}} uppercase={false}>
                                                Bisa Booking
                                            </Text>
                                        </Button>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            )}/>  
                        
    
                        
                        </Content>
                    </ScrollView>
                    
                {/* FILTER */}
                
                    <View>
                    <Image source={require('../src/img/filterra.png')} style={{ width: 260, height: 65, borderRadius: 5, bottom: 0, resizeMode:'contain', position: 'absolute', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginBottom: 30}}></Image>
                    </View>
               
    
                </Container>
            )
        }else{
            return(
                <Container>
                    <Content>
                        <Spinner />
                    </Content>
                </Container>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#202020',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
      },
  })