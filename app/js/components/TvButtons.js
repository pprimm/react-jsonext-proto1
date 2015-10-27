'use strict';
import React                  from 'react/addons';
import {RaisedButton, FontIcon}   from 'material-ui';

var TvButtons = React.createClass({
	
	render:function(){
		return(
			<div className='tvButtonsContainer'>
				<div className='centeredInner'>
					<div className='side'>
						<RaisedButton primary={true} label="MENU" style={{float:'right'}}></RaisedButton>

					</div>
					<div className='side'>
						<RaisedButton primary={true}>
							<FontIcon className="material-icons" style={{color:'white'}}>play_arrow</FontIcon>
							<FontIcon style={{color:'white'}} className="material-icons">pause</FontIcon>
						</RaisedButton>
					</div>
				</div>
			</div>
		);

	}

});

export default TvButtons;