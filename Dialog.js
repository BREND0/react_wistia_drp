import React from 'react';
import Dialog from 'react-toolbox/lib/dialog';
import { Button } from 'react-toolbox/lib/button';
import InputTest from './Inputs.js';


// add this back for the input button

class DialogTest extends React.Component {



  state = {
  	 // dripId: '',
     active: false
     //butts: this.props.butts
 };


  handleToggle = () => {
    this.setState({active: !this.state.active});

  }

  handleChange = (name, value) => {
	  this.setState({...this.state, [name]: value});
	  this.setState({butts: value});
  };

  // changeId = () => {
  // 	this.setState({dripId: this.props.title})
  // };

  onClick = (event) => {
  	//this.handleChange();
  	this.handleToggle();
  	// this.changeId();
  };

  actions = [
    { label: "Cancel", onClick: this.handleToggle },
    { label: "Save", onClick: this.handleToggle }
  ];

  render () {
    return (
      <div>

        <Button label='Show my dialog' onClick={this.onClick} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='Copy Your New Drip Code Below!'
        >
			<h3>
			  {'<!-- "DRIP" -->'}
			  <br></br>
			  {'<script type="text/javascript">'}
			  <br></br>
			  {'var _dcq = _dcq || [];'}
			  <br></br>
			  {'var _dcs = _dcs || {};'}
			  <br></br>
			  {'_dcs.account = '}  { '\'' + this.props.name + '\''}  {';'}
			  <br></br>
			  {'(function() {'}
			  <br></br>
			  {'var dc = document.createElement(\'script\');'}
			  <br></br>
			  {'dc.type = \'text/javascript\'; dc.async = true;'}
			  <br></br>
			  {'dc.src = \'//tag.getdrip.com/' + this.props.name + '.js\';'}
			  <br></br>
			  {'var s = document.getElementsByTagName(\'script\')[0];'}
			  <br></br>
			  {'s.parentNode.insertBefore(dc, s);'}
			  <br></br>
			  {'})();'}
			  <br></br>
			  {'</script>'}
			</h3>
        </Dialog>
      </div>
    );
  }
}

export default DialogTest;

