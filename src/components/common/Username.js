import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { username: state.username };
};

const ConnectedUsername = ({ username }) => <h1>Hello, {username.username}</h1>;

const Username = connect(mapStateToProps)(ConnectedUsername);

export default Username;
