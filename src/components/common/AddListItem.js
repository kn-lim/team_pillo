import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMember } from '../../actions/index';
import uuidv1 from 'uuid';
import { Button } from 'reactstrap';

const mapDispatchToProps = dispatch => {
  return {
    addMember: member => dispatch(addMember(member))
  };
};

var buttonstyle = {
  padding: '5px 10px 5px 10px',
  margin: '10px 10px 0px 0px'
};

class ConnectedListItem extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ label: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { label } = this.state;
    const id = uuidv1();
    this.props.addMember({ label, id });
    this.setState({ label: '' });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Enter member name"
          value={this.state.label}
          onChange={this.handleChange}
        />{' '}
        <br />
        <Button style={buttonstyle} color="primary" onClick={this.handleSubmit}>
          Add Member
        </Button>
      </div>
    );
  }
}

const AddListItem = connect(null, mapDispatchToProps)(ConnectedListItem);

export default AddListItem;
