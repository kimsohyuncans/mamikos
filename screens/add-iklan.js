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
	Picker,
	Radio,
	ListItem,
	Footer,
	FooterTab,
	CheckBox,
   } from 'native-base';

import {View,TouchableOpacity,ScrollView,StyleSheet,Image} from 'react-native';
import ImagePicker from "react-native-image-picker";
import Map from './map';

const options = {
	title: "Select a photo",
	takePhotoButtonTitle: "Take a photo",
	chooseFromLibraryButtonTitle: "Choose from gallery",

	storageOptions: {
		skipBackup: true,
		path: 'images',
	  },
};


export default class AddAdvertisementPage extends Component {

	state = {
 
		avatarSource: null,
	  
	  };
	
	handleChoosePhoto = () => {
		
		// alert('clicked');
		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);
		  
			if (response.didCancel) {
			  console.log('User cancelled image picker');
			} else if (response.error) {
			  console.log('ImagePicker Error: ', response.error);
			} else {
			  const source = { uri: response.uri };
		  
			  // You can also display the image using data:
			  // const source = { uri: 'data:image/jpeg;base64,' + response.data };
		  
			  this.setState({
				avatarSource: source,
			  });
			}
		  });
	}

	static navigationOptions = {
    header: null
  }

	constructor(props){
		super(props);
		this.state = {itemOne: false, itemTwo: false, itemThree: false, itemFour: false},
  
		this.state = {
			selected2: undefined
		  };
		
	}

	onValueChange2(value: string) {
		this.setState({
		  selected2: value
		});
	  }

	previousPage(){
		const { goBack } = this.props.navigation
		goBack()
	}
	
	



    render() {
    return (
		
      <Container>
        <Header style={styles.header}  androidStatusBarColor="#0baa56">
          <Left>
            <Button transparent onPress={ () => this.previousPage()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Item>
            <Text style={{fontSize: 20, fontFamily: 'Lato-Semibold', color: 'white'}} numberOfLines={1}>Tambah Data Iklan</Text>
			</Item>
          <Right>
            <Button  onPress={() => alert('coming soon')} style={{borderRadius: 10, height: 40, marginRight:5 , backgroundColor: '#0baa56', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'white'}}>
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
	        		<Item  style={{borderBottomColor: '#0baa56'}}>
	        			<Input  style={{marginLeft: -5}} placeholderTextColor="#bcbcbc" placeholder="Masukan judul iklan kost"/>
	        		</Item>
					<View style={{marginLeft: 15}}>
	        		<Label style={styles.label}>Harga Kost Perbulan</Label>
					</View>
	        		<Item style={{borderBottomColor: '#0baa56'}}>
	        			<Input style={{marginLeft: -5}} placeholderTextColor="#bcbcbc"  placeholder="Masukan harga kost, misalnya: 80000" keyboardType={'numeric'}/>
	        		</Item>
						<View style={{marginLeft: 10}}>
	        			<Label style={styles.label}>Deskripsi Kost</Label>
						</View>
	        			<Textarea  rowSpan={3.5} placeholderTextColor="#bcbcbc"  placeholder="Masukan Deskripsi Kost, misalnya: Kost sudah termasuk kasur, dekat dengan Bootcamp Arkademy, listrik ditanggung lucinta " style={styles.textarea}/>


		       		<Label style={{marginTop: 20, fontFamily: 'Lato-Semibold', fontSize: 20, marginLeft: 10}}>Lokasi Kost</Label>
		       		<Item style={{borderBottomColor: '#0baa56'}}>
		       			<Icon name='ios-search'/>
		       			<Input style={{ fontFamily: 'Lato-Semibold', fontSize: 16}} placeholderTextColor="#bcbcbc" placeholder="Search"/>
						   <Button onPress={() => alert('coming soon')} style={{borderRadius: 10, backgroundColor: '#0baa56', marginRight: -10}}>
							   <Text uppercase={false}>
								   Ubah Lokasi 
							   </Text>
							</Button>
		       		</Item>
		       	</Form>

		       	<View style={styles.map} >
		       		<Map />
		       	</View>

				{/* LONG LAT */}
				<View style={{backgroundColor: 'transparent', height: 55, flexDirection: 'row'}}>
					<View style={{flex: 1, backgroundColor: 'transparent', marginTop: 5}}>
						<Item style={styles.item} floatingLabel>
						<Label style={styles.labelText}>Masukan Latitude...</Label>
						<Input/>
						</Item>
					</View>
					<View style={{flex: 1, backgroundColor: 'transparent', marginTop: 5}}>
						<Item style={styles.item} floatingLabel>
						<Label style={styles.labelText}>Masukan Longlitude...	</Label>
						<Input/>
						</Item>
					</View>
				</View>

		       {/*Form detail penjual*/}
		       <Form style={styles.form}>
			       <View style={{marginLeft: 10}}>
		       		<Label style={styles.label}>Tuliskan alamat lengkap penjual</Label>
					</View>
		       		<Item style={{borderBottomColor: '#0baa56'}}>
		       			<Input rowSpan={4} style={{marginLeft: -10}} placeholderTextColor="#bcbcbc" placeholder="Masukan alamat misalnya: jalan, kecamatan" />
		       		</Item>

					
					<View style={{marginLeft: 10}}>

					{/* MASUKAN FOTO */}	
					
					<View>
		       		<Label style={styles.label}>Masukkan Foto</Label>
					   <TouchableOpacity tittle={"Choose Photo"} onPress={this.handleChoosePhoto} style={{width: 100,height: 100, flexDirection: 'row'}}>
					   <Image source={require('../src/icon/addimage.png')} style={{width: 138,height:110,resizeMode: 'contain',marginTop: 10, marginBottom: 20}}/>
					   
					   
		       		{ this.state.avatarSource === null ? <TouchableOpacity tittle={"Choose Photo"} onPress={this.handleChoosePhoto} style={{width: 100,height: 100, flexDirection: 'row'}}>
					   <Image source={require('../src/icon/addimage.png')} style={{width: 138,height:110,resizeMode: 'contain',marginTop: 10, marginBottom: 20}}/>
					   </TouchableOpacity>  :
              <Image style={{width: 138,height:110,resizeMode: 'contain',marginTop: 10, marginBottom: 20, marginLeft: 20}} source={this.state.avatarSource} />
            }
				</TouchableOpacity></View>
					   
		       		  

					{/* JUMLAH KAMAR */}
					<Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 40}}>
						Jumlah Kamara
					</Label>
		       		<Item style={{ marginLeft: -5, borderBottomColor: '#0baa56'}}>
		       			<Input  placeholderTextColor="#bcbcbc" placeholder='Masukan jumlah kamar' keyboardType={'numeric'}/>
		       		</Item>

					{/* LUAS KAMAR */}
					<Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 25}}>
						Luas Kamar
					</Label>
					<View style={{backgroundColor: 'transparent', height: 55, flexDirection: 'row', marginLeft: -15}}>
						<View style={{flex: 1, backgroundColor: 'transparent', marginTop: -15}}>
							<Item style={styles.item} floatingLabel >
							<Label numberOfLines={1} style={styles.labelText}>Masukan Luas...</Label>
							<Input keyboardType={'numeric'}/>
							</Item>
						</View>
						<Text style={{marginTop: 30, fontFamily: 'Lato-Semibold', marginHorizontal: 10}}>X</Text>
						<View style={{flex: 1, backgroundColor: 'transparent', marginTop: -15, marginLeft: -10}}>
							<Item style={styles.item} floatingLabel>
							<Label numberOfLines={1} style={styles.labelText}>Masukan Lebar...</Label>
							<Input keyboardType={'numeric'}/>
							</Item>
						</View>
					</View>

					{/* GENDER KOST */}
					<Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 25}}>Gender Kost</Label>
					<Picker
						mode="dropdown"
						iosIcon={<Icon name="arrow-down" />}
						style={{ width: undefined }}
						placeholder="Select your SIM"
						placeholderStyle={{ color: "#bfc6ea" }}
						placeholderIconColor="#007aff"
						selectedValue={this.state.selected2}
						onValueChange={this.onValueChange2.bind(this)}
					>
						<Picker.Item label="Campur" value="Campur" />
						<Picker.Item label="Putra" value="Putra" />
						<Picker.Item label="Putri" value="Putri" />
					</Picker>

					
					{/* FASILITAS KOST */}
					<Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 20}}>
						Fasilitas Kost
					</Label>
					<View style={{marginLeft: -15}}>
					<ListItem style={{ borderBottomColor: '#0baa56' }} onPress={() => this.setState({ itemOne: !this.state.itemOne })} >
              <CheckBox color={'#0baa56'} style={{borderRadius: 5}} checked={this.state.itemOne} onPress={() => this.setState({ itemOne: !this.state.itemOne })} />
              <Body>
                <Text>Kasur</Text>
              </Body>
            </ListItem>
            <ListItem style={{ borderBottomColor: '#0baa56' }} onPress={() => this.setState({ itemTwo: !this.state.itemTwo })} >
              <CheckBox color={'#0baa56'} style={{borderRadius: 5}} checked={this.state.itemTwo} onPress={() => this.setState({ itemTwo: !this.state.itemTwo })} />
              <Body>
                <Text>Wifi - Internet</Text>
              </Body>
            </ListItem>
            <ListItem style={{ borderBottomColor: '#0baa56' }}   onPress={() => this.setState({ itemThree: !this.state.itemThree })}>
              <CheckBox color={'#0baa56'} style={{borderRadius: 5}} checked={this.state.itemThree} onPress={() => this.setState({ itemThree: !this.state.itemThree })} />
              <Body>
                <Text>Akses kunci 24 Jam</Text>
              </Body>
            </ListItem>
            <ListItem style={{ borderBottomColor: '#0baa56' }} onPress={() => this.setState({ itemFour: !this.state.itemFour })}>
              <CheckBox color={'#0baa56'} style={{borderRadius: 5}} checked={this.state.itemFour} onPress={() => this.setState({ itemFour: !this.state.itemFour })} />
              <Body>
                <Text>Kamar mandi dalam</Text>
              </Body>
            </ListItem>
      </View>


						{/* NAMA LENGKAP */}
					   <Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 25}}>Nama Lengkap</Label>
		       		<Item style={{ marginLeft: -5, borderBottomColor: '#0baa56'}}>
		       			<Input  placeholderTextColor="#bcbcbc" placeholder='Masukan nama lengkap atau sapaan anda'/>
		       		</Item>

					   {/* NOMOR TELEPON */}
					   <Label style={{fontFamily: 'Lato-Semibold', fontSize: 19, marginTop: 25}}>Nomor Telepon</Label>
		       		<Item style={{ marginLeft: -5, borderBottomColor: '#0baa56'}}>
		       			<Input  placeholderTextColor="#bcbcbc" placeholder='Masukan nomor telepon yg bisa dihubungi' keyboardType={'numeric'}/>
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
		borderBottomColor: '#0baa56',
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
		marginTop:20,
		elevation: 1
	},

	labelText : {
		color:'#a6a6a6',
		fontFamily: 'Lato-Regular'
	  },

	  item : {
		borderBottomColor: '#0baa56',
		borderBottomWidth: 1, 
	  },
	
	label:{
		marginTop: 20,
		fontFamily: 'Lato-Semibold',
		fontSize: 19,
		marginLeft: 0,


	}
})