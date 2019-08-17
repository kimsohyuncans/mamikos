import React, { Component } from 'react';
// import MapView from 'react-native-maps';
import { Container,
   Header,
   Left,
   Body,
   Right,
   Button,
   Icon,
   Title,
   Text,
   Content,
   Form,
   Item,
   Input,
   Label,
   Textarea,
   Radio,
   ListItem,

   } from 'native-base';

import {View,TouchableOpacity,ScrollView,StyleSheet} from 'react-native';

import Map from './map'


export default class AddAdvertisementPage extends Component {

	static navigationOptions = {
    header: null
  }

	constructor(){
		super();

		this.state = {
			tombolradio : {
				barang:false,
				jasa:false,
				bekas:false,
				baru:false,
				
			},
		}
	}



    render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Tambah Data Iklan</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>TanyaCs</Text>
            </Button>
          </Right>
        </Header>

        <Content style={styles.content}>
        	<ScrollView>

        {/*Form Barang Dan Jasa*/}
	        	<Form style={styles.form}>
	        		<Label style={styles.label}>Judul Iklan</Label>
	        		<Item >
	        			<Input placeholder="Tulis judul sesuai barang atau jasa" onFocus={this.FocusChange}/>
	        		</Item>
	        		<Label style={styles.label}>Harga Barang atau jasa</Label>
	        		<Item >
	        			<Input placeholder="Tulis judul sesuai barang atau jasa"/>
	        		</Item>
	        			<Label style={styles.label}>Deskripsi barang atau jasa</Label>
	        			<Textarea rowSpan={5} placeholder="Textarea" style={styles.textarea}/>


	        			<Label>Kategori</Label>

	        		{/* Radio Button*/}
	        		<View style={styles.radiocontainer}>
	        			
	        			<View style={styles.RowContainer}>
		        			<Radio selectedColor={'#0baa56'} selected={this.state.tombolradio.barang} onPress={ () => {
		        				this.setState({
		        					tombolradio : {
		        						barang:true,
		        						jasa:false,
		        						baru:false,
		        						bekas:true
		        					}
		        				})
		        				}
		        			}/>
		        			<Text> barang </Text>		
		       			</View>
		       			<View style={styles.RowContainer}>
		        			<Radio selectedColor={'#0baa56'} selected={this.state.tombolradio.jasa} onPress={() => {
		        				this.setState({
		        					tombolradio:{
		        						barang:false,
		        						jasa:true,
		        						baru:false,
		        						bekas:false
		        					}
		        				})
		        			}}/>
		        			<Text> Jasa </Text>		
		       			</View>

	          
		       		</View>
		       			<Label>Kondisi</Label>
		       		<View style={styles.radiocontainer}>
	        			
	        			<View style={{flex:1,flexDirection:'row'}}>
		        			<Radio selectedColor={'#0baa56'} selected={this.state.tombolradio.baru} onPress={() => {
		        				this.setState({
		        					tombolradio : {
		        						barang:true,
										jasa:false,
										baru:true,
										bekas:false
									}
		        				})
		        			}}/>
		        			<Text> baru </Text>		
		       			</View>
		       			<View style={{flex:1,flexDirection:'row'}}>
		        			<Radio selectedColor={'#0baa56'} selected={this.state.tombolradio.bekas} onPress={() => {
		        				this.setState({
		        					barang:true,
		        					jasa:false,
		        					baru:false,
		        					bekas:true
		        				})
		        			}}/>
		        			<Text> bekas </Text>		
		       			</View>

	          
		       		</View>
		       		<Label>Lokasi Penjual Barang dan jasa </Label>
		       		<Item>
		       			<Icon name='ios-search'/>
		       			<Input placeholder="Search"/>
		       			<Button success><Text>Ubah Lokasi </Text></Button>
		       		</Item>


		       	</Form>

		       	<View style={styles.map} >
		       		<Map />
		       	</View>

		       {/*Form detail penjual*/}
		       <Form style={styles.form}>
		       		<Label style={styles.label}>Tuliskan alamat lengkap penjual</Label>
		       		<Item>
		       			<Input placeholder="masukkan sepeti nama jalan , kelurahan,kecamatan,kota,dst" />
		       		</Item>
		       		<Label style={styles.label}>Masukkan Foto</Label>
		       		<TouchableOpacity onPress={() => alert('hello')} style={{backgroundColor: 'pink',height: 100,width: 100}}/>

		       		<Label style={styles.label}>Kontak yang bisa di hubungi</Label>
		       		<Label>Nama</Label>
		       		<Item>
		       			<Input placeholder='tulis nama lengkap anda atau sapaan anda'/>
		       		</Item>
		       		<Label style={styles.label}>Nomor Telepon / HP</Label>
		       		<Item floatingLabel style={{marginBottom: '20%'}}>
		       			<Input/>
		       		</Item>


		       </Form>
		    </ScrollView>
		   {/* button submit */}


        </Content>
        	<View style={{justifyContent: 'center',alignItems:'center'}}>
		   		<Button warning style={{width: '95%',justifyContent:'center'}}>
		   			<Text>Submit</Text>
		   		</Button>
		   	</View>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
	header:{
		backgroundColor: '#0baa56'
	},
	content:{
		marginHorizontal: 10
	},
	form : {
		width:'95%',
		justifyContent:'center',
		marginLeft: 10
	},
	textarea : {
		width:'90%',
		borderBottomWidth: 1,
		borderBottomColor: 'green'
	},

	
	radiocontainer : {
		height:40,
		justifyContent:'space-between',
		flexDirection:'row'
	},

	RowContainer: {
		flex:1,
		flexDirection:'row'
	},

	map : {
		height: 200,
		width: '100%',
		borderWidth: 1,
		marginTop:20
	},
	
	label:{
		marginTop: '15%'
	}
})