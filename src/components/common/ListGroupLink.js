import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';

class ListGroupLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      linkTo: props.linkTo
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    window.location = this.state.linkTo;
  }

  render() {
    return (
      <span>
        <ListGroupItem onClick={this.handleClick}>
          <Link to={this.state.linkTo}>{this.state.text}</Link>
        </ListGroupItem>
      </span>
    );
  }
}

export default ListGroupLink;
