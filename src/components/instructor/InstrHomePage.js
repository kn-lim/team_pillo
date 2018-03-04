import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormGroup,
  Label,
  ListGroup,
  ListGroupItem,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container
} from 'reactstrap';
import logo from '../../images/logo.png';

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
        <Navbar fixedTop dark style={{ background: "#34374C" }}>
          <NavbarBrand>
            <a href="/">
              <img src={ logo } width="131" alt="Pillo"/>
            </a>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={ this.state.isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/register">Register</NavLink>
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
                  <a href="#">CSE 134B</a>
                </CardTitle>
                <CardSubtitle>Winter 2018</CardSubtitle>
                <hr />
                <div className="text-left">
                  <ListGroup>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 1
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 2
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 3
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 4
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 5
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 6
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 7
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 8
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 9
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 10
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Card>
            </Col>
            <Col>
              <Card body>
                <CardTitle>
                  <a href="#">COGS 108</a>
                </CardTitle>
                <CardSubtitle>Winter 2018</CardSubtitle>
                <hr />
                <div className="text-left">
                  <ListGroup>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 1
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 2
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 3
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 4
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                      Group 5
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default InstrHomePage;