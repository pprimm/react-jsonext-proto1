'use strict';
import React 			from 'react/addons';
import LightOnoffType 	from './LightOnoffType';
import client 			from '../../client';

var LightOnoffTypeContainer = React.createClass({

	getInitialState:function(){
		return ({value:0});
	},
	componentDidMount:function(){
		this.mqttTopic = this.props.mqttTopic+'/state';

		client.subscribe('get/' + this.mqttTopic);
		client.on('message',function(topic,message){
			if(topic==='get/' + this.mqttTopic){
				this.setState({value:parseInt(message.toString())});
			}
		}.bind(this));

	},
	componentWillUnmount:function(){
		client.unsubscribe('get/' + this.mqttTopic);
	},
	
	update:function(data){
		console.log("Update in container", data);
		client.publish('set/' + this.mqttTopic,data.toString());

	},
	render:function(){
		return <LightOnoffType containerHandler={this.update} displayName={this.props.displayName} value={this.state.value}/>

	}
})

export default LightOnoffTypeContainer; 