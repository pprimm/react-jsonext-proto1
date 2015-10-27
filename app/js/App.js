'use strict';

import React                from 'react/addons';
import {RouteHandler}       from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import mui                  from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager();


var App = React.createClass({
  childContextTypes:{
    muiTheme:React.PropTypes.object
  },

  getChildContext:function(){
    return {
      muiTheme:ThemeManager.getCurrentTheme()
    };
  },
  

  componentWillMount:function() {
    console.log('About to mount App');
  },

  componentDidMount:function(){
    console.log("App mounted. Enabling touch event plugin");
    injectTapEventPlugin();
  },

  

  render:function() {
    return (
      <RouteHandler params={this.props.params}/>
    );
  }

});

export default App;