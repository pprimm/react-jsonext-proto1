'use strict';

import React         	 		from 'react/addons';
import {Link}        			from 'react-router';
import {AppBar,IconButton}      from 'material-ui';
import AppleCircle 				from '../components/AppleCircle';
import TvButtons				from '../components/TvButtons';

var LightsPage = React.createClass({
	render:function(){
		return (
			<div className={'appContainer'}>
				<AppBar
					className = 'header'
					title = 'Apple TV'
					style={{paddingRight:'64px'}} 
					iconElementLeft={<Link to="/"><IconButton iconClassName="material-icons" iconStyle={{color:'white'}}>arrow_back</IconButton></Link>}/>

				<AppleCircle/>
				<TvButtons/>



			</div>

		);
	}
})

export default LightsPage;