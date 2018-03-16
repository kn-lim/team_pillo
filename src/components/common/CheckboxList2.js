import React from 'react';
import { Col } from 'reactstrap';
import Checkbox from './Checkbox';
import { connect } from 'react-redux';
import RemoveCheckButton from './RemoveCheckButton';

const mapStateToProps = state => {
  return { checklist: state.checklist };
};

var colStyle = {
  padding: '0px 5px 0px 19px'
};

const ConnectedCheckboxList = ({ checklist }) => (
  <div>
    {checklist.map(el => (
      <Col key={el.id} style={colStyle}>
        <Checkbox id={el.id} labelDescription={el.label} key={el.id} />
        <RemoveCheckButton id={el.id} />
      </Col>
    ))}
  </div>
);

const CheckboxList2 = connect(mapStateToProps)(ConnectedCheckboxList);

export default CheckboxList2;
