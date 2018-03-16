import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ListGroup,
  Card,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container,
  ListGroupItem
} from 'reactstrap';
import logo from '../../images/logo.png';
import { NavLink as RRNavLink } from 'react-router-dom';
import Username from '../common/Username';
class InstrHomePage extends React.Component {
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
          <NavbarBrand tag={RRNavLink} to="/instructor">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/create_class">
                  Create Class
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
            <Username />{' '}
          </Row>
          <br />
          <Row>
            <Col>
              <Card body>
                <CardTitle>
                  <NavLink tag={RRNavLink} to="/instr_class">
                    CSE 134B
                  </NavLink>
                </CardTitle>
                <CardSubtitle>Winter 2018</CardSubtitle>
                <hr />
                <div style={{ textAlign: 'center' }}>
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
                </div>
              </Card>
            </Col>
            <Col>
              <Card body>
                <CardTitle>
                  <NavLink tag={RRNavLink} to="/instr_class">
                    COGS 108
                  </NavLink>
                </CardTitle>
                <CardSubtitle>Winter 2018</CardSubtitle>
                <hr />
                <div style={{ textAlign: 'center' }}>
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
                  </ListGroup>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default InstrHomePage;
