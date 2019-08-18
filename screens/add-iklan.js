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
	Footer,
	FooterTab,
   } from 'native-base';

import {View,TouchableOpacity,ScrollView,StyleSheet,Image} from 'react-native';

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
        <Header style={styles.header}  androidStatusBarColor="#0baa56">
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Item>
            <Text style={{fontSize: 20, fontFamily: 'Lato-Semibold', color: 'white'}} numberOfLines={1}>Tambah Data Iklan</Text>
			</Item>
          <Right>
            <Button style={{borderRadius: 10, height: 40, marginRight:5 , backgroundColor: '#0baa56', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'white'}}>
              <Text  style={{fontSize: 15, fontFamily: 'Lato-Semibold', color: 'white'}} numberOfLines={1} uppercase={false}>Tanya CS</Text>
            </Button>
          </Right>
        </Header>
		<ScrollView showsVerticalScrollIndicator={false}>
        <Content style={styles.content}>
        	

		{/*Form Barang Dan Jasa*/}
				<View style={{marginLeft: 0}}>
	        		
					<Form style={styles.form}>
					<View style={{marginLeft: 15}}>
					<Label style={styles.label}>Judul Iklan</Label>
					</View>
	        		<Item  >
	        			<Input  style={{marginLeft: -5}} placeholderTextColor="#bcbcbc" placeholder="Masukan judul iklan kost"/>
	        		</Item>
					<View style={{marginLeft: 15}}>
	        		<Label style={styles.label}>Harga Kost</Label>
					</View>
	        		<Item >
	        			<Input style={{marginLeft: -5}} placeholderTextColor="#bcbcbc"  placeholder="Masukan harga kost, misalnya: 80000"/>
	        		</Item>
						<View style={{marginLeft: 10}}>
	        			<Label style={styles.label}>Deskripsi Kost</Label>
						</View>
	        			<Textarea rowSpan={3.5} placeholderTextColor="#bcbcbc"  placeholder="Masukan Deskripsi Kost, misalnya: Kost sudah termasuk kasur, dekat dengan Bootcamp Arkademy, listrik ditanggung lucinta " style={styles.textarea}/>


		       		<Label style={{marginTop: 20, fontFamily: 'Lato-Semibold', fontSize: 20, marginLeft: 10}}>Lokasi Kost</Label>
		       		<Item>
		       			<Icon style name='ios-search'/>
		       			<Input style={{ fontFamily: 'Lato-Semibold', fontSize: 16}} placeholderTextColor="#bcbcbc" placeholder="Search"/>
		       			<Button style={{borderRadius: 10, backgroundColor: '#0baa56', marginRight: -10}}><Text uppercase={false}>Ubah Lokasi </Text></Button>
		       		</Item>


		       	</Form>

		       	<View style={styles.map} >
		       		<Map />
		       	</View>

		       {/*Form detail penjual*/}
		       <Form style={styles.form}>
			       <View style={{marginLeft: 10}}>
		       		<Label style={styles.label}>Tuliskan alamat lengkap penjual</Label>
					</View>
		       		<Item>
		       			<Input rowSpan={4} style={{marginLeft: -10}} placeholderTextColor="#bcbcbc" placeholder="Masukan alamat misalnya: jalan, kecamatan, dll" />
		       		</Item>
					<View style={{marginLeft: 10}}>
		       		<Label style={styles.label}>Masukkan Foto</Label>
		       		

		       		<TouchableOpacity onPress={() => alert('hello')} style={{width: 100,height: 100}}>

		       			<Image source={require('../src/icon/addimage.png')} style={{width: 138,height:110,resizeMode: 'contain',marginTop: 10, marginBottom: 20}}/>
		       		</TouchableOpacity>
					   <Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 40}}>Nama Depan dan Belakang</Label>
		       		<Item style={{ marginLeft: -5}}>
		       			<Input  placeholderTextColor="#bcbcbc" placeholder='Masukan nama lengkap atau sapaan anda'/>
		       		</Item>
					   <Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 40}}>Nomor Telepon</Label>
		       		<Item style={{ marginLeft: -5}}>
		       			<Input  placeholderTextColor="#bcbcbc" placeholder='Masukan nomor telepon anda'/>
		       		</Item>
					</View>
		       		


		       </Form>

			   {/* KAKI */}
			   <View style={{justifyContent: 'center', alignItems: 'center'}}>
			   <Button style={{marginTop: 50, marginBottom: 50, justifyContent: 'center', alignItems: 'center', width: 300, backgroundColor: '#0baa56', borderRadius: 10}}><Text>Submit</Text></Button>
			   </View>


			   </View>

		  
        </Content>
		</ScrollView>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
	header:{
		backgroundColor: '#0baa56'
	},
	content:{
		marginHorizontal:20
	},
	form : {
		marginLeft: -10,
		width:'100%',
		justifyContent:'center'
	},
	textarea : {
		width: "100%",
		borderBottomWidth: 1,
		borderBottomColor: '#dbdbdb',
		fontFamily: 'Lato-Semibold',
		fontSize: 16,
		marginLeft: 0
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
		marginTop:20,
		borderColor: '#dbdbdb'
	},
	
	label:{
		marginTop: 20,
		fontFamily: 'Lato-Semibold',
		fontSize: 19,
		marginLeft: 0

	}
})