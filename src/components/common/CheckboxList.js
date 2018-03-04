import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container
} from 'reactstrap';
import Checkbox from './Checkbox';

class CheckboxList extends Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <FormGroup check key={item.key}>
        <Checkbox labelDescription={item.text} />
      </FormGroup>
    );
  }

  render() {
    var checkboxList = this.props.list;
    var listItems = checkboxList.map(this.createTasks);

    return <div>{listItems}</div>;
  }
}

export default CheckboxList;
