import React from 'react';
import { Input, Label } from 'reactstrap';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxState: true,
      labelState: true,
      labelDescription: props.labelDescription
    };
  }

  toggle(event) {
    this.setState({
      checkboxState: !this.state.checkboxState,
      labelState: !this.state.labelState
    });
  }

  render() {
    return (
      <span>
        <Input
          type="checkbox"
          onClick={this.toggle.bind(this)}
          style={
            this.state.checkboxState ? { opacity: '1' } : { opacity: '0.35' }
          }
        />
        <Label
          style={this.state.labelState ? { opacity: '1' } : { opacity: '0.35' }}
        >
          {this.state.labelDescription}
        </Label>
      </span>
    );
  }
}

export default Checkbox;
