import React from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container
} from 'reactstrap';
import logo from '../../images/logo.png';
import CheckboxList from '../common/CheckboxList';
import Username from '../common/Username';
import { NavLink as RRNavLink } from 'react-router-dom';
import AddCheckButton from '../common/AddCheckButton';
import CheckboxList2 from '../common/CheckboxList2';
import MemberList from '../common/MemberList';
class StuHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,

      checkboxitems1: [
        { text: 'Create mockup of pages for app', key: 1 },
        { text: 'Code the pages in HTML/CSS', key: 2 },
        { text: 'Add Javascript functionality to website', key: 3 }
      ],

      checkboxitems2: [
        { text: 'PA1', key: 1 },
        { text: 'PA2', key: 2 },
        { text: 'PA3', key: 3 }
      ]
    };

    this.addCheckbox1 = this.addCheckbox1.bind(this);
    this.addCheckbox2 = this.addCheckbox2.bind(this);

    this.deleteItem1 = this.deleteItem1.bind(this);
    this.deleteItem2 = this.deleteItem2.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  addCheckbox1(e) {
    var checkboxArray = this.state.checkboxitems1;

    if (this._inputElement1.value !== '') {
      checkboxArray.push({
        text: this._inputElement1.value,
        key: Date.now()
      });

      this.setState({
        checkboxitems1: checkboxArray
      });

      this._inputElement1.value = '';
    }

    console.log(checkboxArray);

    e.preventDefault();
  }

  addCheckbox2(e) {
    var checkboxArray = this.state.checkboxitems2;

    if (this._inputElement2.value !== '') {
      checkboxArray.push({
        text: this._inputElement2.value,
        key: Date.now()
      });

      this.setState({
        checkboxitems2: checkboxArray
      });

      this._inputElement2.value = '';
    }

    console.log(checkboxArray);

    e.preventDefault();
  }

  deleteItem1(key) {
    var filteredItems = this.state.checkboxitems1.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      checkboxitems1: filteredItems
    });
  }

  deleteItem2(key) {
    var filteredItems = this.state.checkboxitems2.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      checkboxitems2: filteredItems
    });
  }

  render() {
    return (
      <div>
        <Navbar dark style={{ background: '#34374C' }}>
          <NavbarBrand tag={RRNavLink} to="/student">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/add_class">
                  Add Class
                </NavLink>
                <NavLink tag={RRNavLink} to="/">
                  Log Out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <Row>
            <Username />
          </Row>
          <br />
          <Row>
            <Col>
              <Card body>
                <CardTitle>
                  <NavLink tag={RRNavLink} to="/stu_class">
                    CSE 134B
                  </NavLink>
                </CardTitle>
                <CardSubtitle>Winter 2018</CardSubtitle>
                <hr />
                <div className="text-left">
                  <p color="muted">Members:</p>
                  <ul>
                    <li>Kevin Lim</li>
                    <li>Ken Truong</li>
                    <li>Perry Liu</li>
                    <MemberList />
                  </ul>
                  <p color="muted">Checklist:</p>
                  <form>
                    <CheckboxList
                      list={this.state.checkboxitems1}
                      delete={this.deleteItem1}
                    />
                    <CheckboxList2 />
                  </form>
                </div>
              </Card>
            </Col>
            <Col>
              <Card body>
                <CardTitle>
                  <NavLink tag={RRNavLink} to="/stu_class">
                    COGS 108
                  </NavLink>
                </CardTitle>
                <CardSubtitle>Winter 2018</CardSubtitle>
                <hr />
                <div className="text-left">
                  <p color="muted">Members:</p>
                  <ul>
                    <li>Kevin Lim</li>
                  </ul>
                  <p color="muted">Checklist:</p>
                  <form>
                    <CheckboxList
                      list={this.state.checkboxitems2}
                      delete={this.deleteItem1}
                    />
                    {/*
                    <input
                      ref={a => (this._inputElement2 = a)}
                      placeholder="enter task"
                    />{' '}
                    <Button onClick={this.addCheckbox2}>Add Checkbox</Button> */}
                  </form>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default StuHomePage;
