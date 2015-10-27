'use strict';

import React         from 'react/addons';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';
import mui from 'material-ui'
import {AppBar,RaisedButton} from 'material-ui'


var HomePage = React.createClass({
  render:function() {
    return (
      <div className={'appContainer'}>
      <AppBar
        className="header"
        title="Home"
        showMenuIconButton={false}/>

      <div className={'flex-container'}>
        <Link to="/lights"><RaisedButton label="Lights" primary={true} style={{minWidth:'40vw',marginBottom:'30%', marginTop:'30%'}} /></Link>
        <Link to="/appletv"><RaisedButton label="Apple TV" primary={true} style={{minWidth:'40vw'}} /></Link>
      </div>
      
    </div>
      
    );
  }

});

export default HomePage;