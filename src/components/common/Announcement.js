import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      date: props.date,
      description: props.description
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <li color="muted">{this.state.date}</li>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

Announcement.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string
};

export default Announcement;
