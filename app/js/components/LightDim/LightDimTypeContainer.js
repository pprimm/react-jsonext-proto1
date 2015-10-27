'use strict';

import React 		from 'react/addons';
import LightDimType from './LightDimType';
import client 		from '../../client';


var LightDimTypeContainer = React.createClass({
	propTypes:{
    	displayName:React.PropTypes.string.isRequired
  	},
	getInitialState:function(){
		return ({value:0});

	},
	componentDidMount:function(){
		this.mqttLevel = this.props.mqttTopic+'/level';
		this.mqttCmd = this.props.mqttTopic+'/cmd';
		client.subscribe('get/' + this.mqttLevel);
		client.on('message',function(topic,message){
			if(topic==='get/' + this.mqttLevel){

				this.setState({value:parseInt(message.toString())});

			}
			

		}.bind(this));

	},
	componentWillUnmount:function(){
		client.unsubscribe('get/' + this.mqttLevel);

	},
	onOffHandler:function(data){
		client.publish('set/'+this.mqttCmd,data.toString());
	},
	updateLevel:function(data){
		client.publish('set/'+ this.mqttLevel,data.toString());
	},
	render:function(){
		return <LightDimType containerHandler={this.updateLevel} onOffHandler={this.onOffHandler} displayName={this.props.displayName} value={this.state.value} />
	}
})

export default LightDimTypeContainer;