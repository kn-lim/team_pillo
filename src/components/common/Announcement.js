import React from 'react';

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

export default Announcement;
