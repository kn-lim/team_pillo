import React from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { member: state.member };
};

var colStyle = {
  padding: '0px 5px 0px 19px'
};

const ConnectedMemberList = ({ member }) => (
  <div>{member.map(el => <li id={el.id}>{el.label}</li>)}</div>
);

const MemberList = connect(mapStateToProps)(ConnectedMemberList);

export default MemberList;
