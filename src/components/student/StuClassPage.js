import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  Row,
  Col,
  Container,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import logo from '../../images/logo.png';
import { NavLink as RRNavLink } from 'react-router-dom';

class StuClassPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
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
                <NavLink tag={RRNavLink} to="/stu_class">
                  Class
                </NavLink>
                <NavLink tag={RRNavLink} to="/forum">
                  Forum
                </NavLink>
                <NavLink tag={RRNavLink} to="/group">
                  My Group
                </NavLink>
                <NavLink tag={RRNavLink} to="/grades">
                  Class Grades
                </NavLink>
                <NavLink tag={RRNavLink} to="/">
                  Log Out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <Card>
            <CardBody>
              <h1>CSE 134B</h1>
              <p color="muted">Winter 2018</p>
              <hr />
              <Row>
                <Col xs="4">
                  <ListGroup>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 1
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 2
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 3
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 4
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 5
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 6
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 7
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 8
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 9
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 10
                    </ListGroupItem>
                  </ListGroup>
                </Col>
                <Col style={{ textAlign: 'left' }}>
                  <h3>Announcements</h3>
                  <hr />
                  <p>PA3</p>
                  <p color="muted">Feb. 18,2018</p>
                  <ul>
                    <li>
                      Convert your PA2 hard-coded content such as to do list,
                      chat messages, to JavaScript objects. Then, use JavaScript
                      to populate the content to HTML.
                    </li>
                    <li>
                      Add in the JavaScript to make your page interactive to
                      user's events such as button-clicks (add, remove, update,
                      etc.). You do not need to store any data on the server.
                      You can use user's data to simulate event handling.
                    </li>
                  </ul>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs="12">
                  <ListGroupItem tag={RRNavLink} to="/forum">
                    Class Forum
                  </ListGroupItem>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default StuClassPage;
