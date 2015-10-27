'use strict';

import React from 'react/addons';
import mui   from 'material-ui';

let Colors = mui.Styles.Colors;

var AppleCircle = React.createClass({
	animateQuarters:function(direction){
		document.getElementById(direction).setAttribute('class','quarterTransition');
		setTimeout(function(){
			document.getElementById(direction).setAttribute('class','quarterTransitionBack');
		},500);


	},
	animateCenter:function(){
		document.getElementById('center').setAttribute('class','centerTransition');
		setTimeout(function(){
			document.getElementById('center').setAttribute('class','centerTransitionBack');

		},500);

	},
	handleCircleClick:function(direction){
		console.log(direction);
		if(direction==='center'){
			this.animateCenter();
		}else{
			this.animateQuarters(direction);
		}
		


	},
	render:function(){
		return (
			<div style={{width:'100%', height:'40%', marginTop:'15px'}}>
				<svg width='100%' height='100%'  viewBox="0 0 200 200" preserveAspectRatio="xMidYMin meet">
			 		<g  id="circle" transform="translate(100,100)"  fill={Colors.cyan500} >
						<path onClick={this.handleCircleClick.bind(this,'left')}   id="left"   d="M0 0-70 70A99 99 0 0 1-70-70Z" />
						<path onClick={this.handleCircleClick.bind(this,'top')}    id="top"    d="M0 0-70-70A99 99 0 0 1 70-70Z" />
						<path onClick={this.handleCircleClick.bind(this,'right')}  id="right"  d="M0 0 70-70A99 99 0 0 1 70 70Z" />
						<path onClick={this.handleCircleClick.bind(this,'bottom')} id="bottom" d="M0 0 70 70A99 99 0 0 1-70 70Z" />
					</g>
					<polyline id="leftArrow" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
					 points="30,120 10,100 30,80"/>
					 <polyline id="rightArrow" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
					 points="170,120 190,100 170,80"/>
					 <polyline id="topArrow" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
					 points="120,30 100,10 80,30"/>
					 <polyline id="bottomArrow" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
					 points="120,170 100,190 80,170"/>
					<circle onClick={this.handleCircleClick.bind(this,'center')} id="center" cx="100" cy="100" r="30" stroke="#FFFFFF" strokeWidth="1" fill={Colors.pinkA200} />
				</svg>
			</div>
	);
	}

});

export default AppleCircle
