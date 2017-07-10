import React from 'react';
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import DialogTest  from './Dialog.js';
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import InputTest from './Inputs.js';
//import App from './App.js';

class Displayer extends React.Component {


//  state = {
//    name: 'getfucked',
//    title: "This is the title"
//  }

//  handleChange = (name, value) => {
//    this.setState({...this.state, [name]: value});
//    this.setState({title: value});
//  };

//  fuckOff () {
//    console.log(document.getElementsByClassName('theme--inputElement--4bZUjKgR').name.value);
//  }

// add this back if needed onChange={this.handleChange.bind(this, 'name')} - InputTest

// this didn't work add it back if needed for DialogTest: update={this.handleChange.bind(this)}

  render() {
    return (
      <div>
        <InputTest onChange={this.props.crossUpdate} title={this.props.title} name={this.props.name} />
        <DialogTest onClick={this.props.crossUpdate} name={this.props.name}  />
      </div>
    )
  }
}

export default Displayer;