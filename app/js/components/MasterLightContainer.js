'use strict';

import React 										from 'react/addons';
import LightDimTypeContainer						from './LightDim/LightDimTypeContainer';
import LightOnoffTypeContainer						from './LightOnoff/LightOnoffTypeContainer';

var MasterLightContainer = React.createClass({
	getInitialState:function(){
		var lightsArr = [];
		lightsArr.push({
			ctrlType:'lightDimType', 
			displayName:'Family Ceiling', 
			mqttTopic:'lights/family/ceiling'
		});
		lightsArr.push({
			ctrlType:'lightOnOffType', 
			displayName:'Family Lamp',
			mqttTopic:'lights/family/lamp'
		});

		return {lightsArr:lightsArr};
		
	},
	render:function(){
		var that=this;
		return(<div style={{height:'calc(100%-64px'}}>
			{this.state.lightsArr.map(function(curVal,index){
				if(curVal.ctrlType=='lightDimType'){
					return <LightDimTypeContainer displayName={curVal.displayName} mqttTopic={curVal.mqttTopic} key={index}/>
				}
				if(curVal.ctrlType=='lightOnOffType'){
					return <LightOnoffTypeContainer displayName={curVal.displayName} mqttTopic={curVal.mqttTopic} key={index}/>
				}
			})}
			</div>);
	}
});

export default MasterLightContainer;
