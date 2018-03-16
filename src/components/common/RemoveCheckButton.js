import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeChecklist } from '../../actions/index';
import uuidv1 from 'uuid';
import { Button } from 'reactstrap';

const mapDispatchToProps = dispatch => {
  return {
    removeChecklist: checklist => dispatch(removeChecklist(checklist))
  };
};

var colStyle = {
  padding: '0px 5px 0px 5px',
  margin: '0px 0px 0px 10px'
};

class ConnectedRemoveCheckButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.removeChecklist(this.state.id);
  }

  render() {
    return (
      <Button color="danger" onClick={this.handleClick} style={colStyle}>
        x
      </Button>
    );
  }
}

const RemoveCheckButton = connect(null, mapDispatchToProps)(
  ConnectedRemoveCheckButton
);

export default RemoveCheckButton;
