'use strict';

import React                                        from 'react/addons';
import {FlatButton, Slider, RaisedButton, Toggle}   from 'material-ui';


var LightOnoffType = React.createClass({
  
  getInitialState:function(){
    return ({value:0});
  },

  propTypes:{
    displayName:React.PropTypes.string.isRequired,
    containerHandler:React.PropTypes.func.isRequired
  },
  handleToggle:function(e,checked){
    if(checked){
      this.props.containerHandler(1);  
    }else{
      this.props.containerHandler(0);
    }

  },


	render:function(){

  
		return(
      <div className='OnOffContainer'>
          <div className='name'>{this.props.displayName}</div>
          <div className='toggle'>
            <Toggle onToggle={this.handleToggle}/>
          </div>
      </div>
    );
	}

});

export default LightOnoffType;

