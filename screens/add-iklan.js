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
	        	<Form style={styles.form}>
	        		<Label style={styles.label}>Judul Iklan</Label>
	        		<Item >
	        			<Input placeholder="Masukan Judul Iklan" onFocus={this.FocusChange}/>
	        		</Item>
	        		<Label style={styles.label}>Harga Kost</Label>
	        		<Item >
	        			<Input placeholder="Masukan Harga Kost"/>
	        		</Item>
	        			<Label style={styles.label}>Deskripsi Kost</Label>
	        			<Textarea rowSpan={2} placeholder="Masukan Deskripsi Kost" style={styles.textarea}/>


	        			
		       			
		       		

	          
		       		
		       		<Label style={{marginTop: 20, fontFamily: 'Lato-Semibold', fontSize: 20}}>Lokasi Kost</Label>
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
		       		

		       		<TouchableOpacity onPress={() => alert('hello')} style={{width: 100,height: 100}}>

		       			<Image source={require('../src/icon/addimage.png')} style={{width: '100%',height:'100%',resizeMode: 'contain'}}/>
		       		</TouchableOpacity>

		       		<Label style={styles.label}>Kontak yang bisa di hubungi</Label>
		       		<Label>Nama</Label>
		       		<Item>
		       			<Input placeholder='tulis nama lengkap anda atau sapaan anda'/>
		       		</Item>
		       		<Label style={styles.label}>Nomor Telepon / HP</Label>
		       		<Item floatingLabel style={{marginBottom: 100}}>
		       			<Input/>
		       		</Item>


		       </Form>
		    
		  

		  
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
		marginHorizontal: 15
	},
	form : {
		width:'95%',
		justifyContent:'center',
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
		marginTop: 20,
		fontFamily: 'Lato-Semibold',
		fontSize: 19
		
	}
})