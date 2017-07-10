import React from 'react';
import Input from 'react-toolbox/lib/input';

class InputTest extends React.Component {

	// update = (name, value) => {
	//     this.setState({...this.state, [name]: value});
	//     this.setState({title: value});
	//   };
// PUT THIS BACK IN THE RETURN OF INPUT TYPE IF NEEDED onChange={this.handleChange.bind(this, 'name')}
	// state = {
	// name: this.props.name,
	// title: this.props.title

	// }

  render () {
  	console.log('input props', this.props);

    return (
      <section>
        <Input type='text' label={this.props.title} name='name' value={this.props.name} onChange={this.props.onChange} maxLength={16} />
      </section>
    );
  }
}






export default InputTest;