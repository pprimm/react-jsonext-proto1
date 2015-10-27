'use strict';

import React                  from 'react/addons';
import {FlatButton, Slider}   from 'material-ui';


var LightDimType = React.createClass({
  getInitialState:function(){
    return({sliderLock:false});

  },
  propTypes:{
    displayName:React.PropTypes.string.isRequired,
    containerHandler:React.PropTypes.func.isRequired,
    value:React.PropTypes.number.isRequired
  },
  handleSliderChange:function(e,newValue){
    this.props.containerHandler(newValue);
  },
  handleOff:function(){
    this.props.onOffHandler('off');    

  },
  handleOn:function(){
    this.props.onOffHandler('on');
  },
  lockSlider:function(e,ui){
    this.setState({sliderLock:true});

  },
  unlockSlider:function(e,ui){
    this.setState({sliderLock:false});
  },


	render:function(){

		return(
      <div className='sliderContainer'>
        <div className='top'>
          <div className='name'>{this.props.displayName}</div>
          <div className ='percent'>{this.props.value}%</div>
        </div>

        <div className = 'bottom'>
          <div className='button'>
            <FlatButton style={{minWidth:'60px', marginTop:'50%'}} onClick={this.handleOff} label="Off" />
          </div>
          <div className='slider' >
            <Slider style={{marginTop:'30px', marginBottom:'0px'}}
                    name = {this.props.displayName.replace(' ','')+'Slider'}
                    max = {100}
                    value = {this.state.sliderLock ? undefined : this.props.value} 
                    onChange = {this.handleSliderChange}
                    step = {1}
                    onDragStart = {this.lockSlider}
                    onDragStop = {this.unlockSlider} />
          </div>
          <div className='button'>
            <FlatButton style={{minWidth:'60px', marginTop:'50%'}} onClick={this.handleOn} label="On" />
          </div>
        </div>
        

      </div>
    );
	}

});

export default LightDimType;

// // <div className ="rightButton" ><FlatButton style={{minWidth:'60px'}} onClick={this.handleOn} label="On" /></div>
// <Slider style = {sliderStyle}
//                     name = {this.props.displayName.replace(' ','')+'Slider'}
//                     max = {100}
//                     value = {this.state.sliderLock ? undefined : this.props.value} 
//                     onChange = {this.handleSliderChange}
//                     step = {1}
//                     onDragStart = {this.lockSlider}
//                     onDragStop = {this.unlockSlider} />
