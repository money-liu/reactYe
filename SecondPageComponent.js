const USER_MODELS = {
    1: { name: 'mot', age: 23 },
    2: { name: '晴明大大', age: 25 }
};

import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
} from 'react-native';

import TressPageComponent from './TressPageComponent';

export default class SecondPageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null
        }
    }

    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id
        this.setState({
            id: this.props.id
        });
    }

    _pressButton() {
            const { navigator } = this.props;

    //         if(this.props.getUser) {
    //             let user = USER_MODELS[this.props.id];
    // //回调传值给上个页面
    //             this.props.getUser(user);
    //         }

            if(navigator) {
    //出栈，返回到上一页
                navigator.push({
                    name: 'TressPageComponent',
                    component: TressPageComponent,
                })
            }
    }

    render() {
        return(
            <View style={{marginTop:100}}>
                <Text>获得的参数: id={ this.state.id }</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳回去</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
