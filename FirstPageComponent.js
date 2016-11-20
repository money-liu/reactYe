import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import SecondPageComponent from './SecondPageComponent'

export default class FirstPageComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 2,
			user: null,
		}
	}

	_pressButton() {
		let _this = this;
		const {navigator} = this.props;
		if(navigator) {
			navigator.push({
				name: 'SecondPageComponent',
				component: SecondPageComponent,
				params: {
					id: this.state.id,
					getUser: function(user){
						_this.setState({
							user: user
						})
					}
				}
			});
		}
	}

    render() {
    	if(this.state.user){
    		return(
              <View style={{marginTop:100}}>
                <Text style={{marginTop:100}}>用户信息: { JSON.stringify(this.state.user) }</Text>
              </View>
    		);
    	} else {
    		return (
              <View style={{marginTop:100}}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                  <Text style={{marginTop:100}}>查询ID为{ this.state.id }的用户信息</Text>
                </TouchableOpacity>
              </View>
    		)
    	}
    }


}
