import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from './login';
import AddAdvertisement from './add-iklan';
import Map from './map';


const AddAdvertisementNav = createStackNavigator({
	AddAdvertisementPage : {
		screen : AddAdvertisement
	},
	MapPage : {
		screen : Map
	},
})

const LoginPageNav = createStackNavigator({
	Login : {
		screen : LoginPage,
	},
	AddAdvertisement : AddAdvertisementNav

})

