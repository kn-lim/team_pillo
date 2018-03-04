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
  Container
} from 'reactstrap';
import logo from '../../images/logo.png';
import ListGroupLink from '../common/ListGroupLink';

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
          <NavbarBrand href="/instructor">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/create_class">Create Class</NavLink>
                <NavLink href="/">Log Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <Row>
            <h1>Hello, instructor!</h1>
          </Row>
          <br />
          <Row>
            <Col>
              <Card body>
                <CardTitle>
                  <a href="/instr_class">CSE 134B</a>
                </CardTitle>
                <CardSubtitle>Winter 2018</CardSubtitle>
                <hr />
                <div style={{ textAlign: 'center' }}>
                  <ListGroup>
                    <ListGroupLink text="Group 1" linkTo="/group" />
                    <ListGroupLink text="Group 2" linkTo="/group" />
                    <ListGroupLink text="Group 3" linkTo="/group" />
                    <ListGroupLink text="Group 4" linkTo="/group" />
                    <ListGroupLink text="Group 5" linkTo="/group" />
                    <ListGroupLink text="Group 6" linkTo="/group" />
                    <ListGroupLink text="Group 7" linkTo="/group" />
                    <ListGroupLink text="Group 8" linkTo="/group" />
                    <ListGroupLink text="Group 9" linkTo="/group" />
                    <ListGroupLink text="Group 10" linkTo="/group" />
                  </ListGroup>
                </div>
              </Card>
            </Col>
            <Col>
              <Card body>
                <CardTitle>
                  <a href="/instr_class">COGS 108</a>
                </CardTitle>
                <CardSubtitle>Winter 2018</CardSubtitle>
                <hr />
                <div style={{ textAlign: 'center' }}>
                  <ListGroup>
                    <ListGroupLink text="Group 1" linkTo="/group" />
                    <ListGroupLink text="Group 2" linkTo="/group" />
                    <ListGroupLink text="Group 3" linkTo="/group" />
                    <ListGroupLink text="Group 4" linkTo="/group" />
                    <ListGroupLink text="Group 5" linkTo="/group" />
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
