'use strict';

import React        						from 'react/addons';
import {Link}        						from 'react-router';
import {AppBar,IconButton}      			from 'material-ui';
import MasterLightContainer              	from '../components/MasterLightContainer';

var LightsPage = React.createClass({
	render:function(){
		return (
			<div className={'appContainer'}>
				<AppBar
					className = 'header'
					title = 'Lights'
					style={{paddingRight:'64px'}}
					iconElementLeft={
						<Link to="/">
							<IconButton iconClassName="material-icons" iconStyle={{color:'white'}}>
								arrow_back
							</IconButton>
						</Link>}/>

						<MasterLightContainer/>

			</div>

		);
	}
})

export default LightsPage;
