import React from 'react';
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button } from 'react-toolbox/lib/button'; // Bundled component import
import DialogTest  from './Dialog.js';
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import InputTest from './Inputs.js';
import Displayer from './displayer.js'


//const App = () => (
//  <div>
//    <PurpleAppBar />
//    <section style={{ padding: 20 }}>
//    <Displayer />

//    </section>
//  </div>
//);

class App extends React.Component {
	state = {
    name: '',
    title: "Enter your Drip ID here"
	};

  updateName = (value) => {
    console.log('state was updated', this.state.name, value)
    this.setState((state) => {
      return {
        ...state,
        name: value,
      }
    })
    // this.setState({...this.state, [name]: value});
    // this.setState({title: value});
  };

  toggleWistiaIdentify = (value) => {
    this.setState((state) => {
      return {
        ...state,
        wistiaIdentify: value,
      }
    })
  }

	render() {
    return( 
    <div>
      <PurpleAppBar />
      <section style={{ padding: 20 }}>
        <Displayer title={this.state.title} crossUpdate={this.updateName} name={this.state.name} />
    	</section>
    </div>
		)
	}
}

export default App;
