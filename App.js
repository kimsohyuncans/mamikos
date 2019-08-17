import React, {Component} from "react";
import { View, Text,Button } from "react-native";

import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';


{/* importing screen */}

import Map from './screens/map'
import LoginPage from './screens/login'
import AddAdvertisementPage from './screens/add-iklan'
import RegisterPage from './screens/register'
import Explore from './screens/Explore'
import CariKost from './screens/CariKost'
import DetailPage from './screens/DetailKost'
import ProfilePage from './screens/profile'



const AuthenticationStack = createStackNavigator({

	login : {
		screen : LoginPage
	},
	register : {
		screen : RegisterPage
	}
})
 

const HomeStack = createStackNavigator({
	explore : {
		screen : Explore
	},

	searchkost : {
		screen : CariKost
	},

	detailkost :  {
		screen : DetailPage
	},

	addadvertisement : {
		screen : AddAdvertisementPage
	},
	profilePage : {
		screen : ProfilePage
	}
})

const App = createSwitchNavigator({
	Authentication : {
		screen : AuthenticationStack
	},

	Home : {
		screen : HomeStack
	}
})

export default createAppContainer(App);

// export default class App extends Component {
// 	render(){
// 		return(
// 			<DetailPage />
// 		)
// 	}
// }