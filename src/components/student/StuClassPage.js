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
  Card,
  CardBody,
  Row,
  Col,
  Container,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import logo from '../../images/logo.png';

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
        <Navbar fixedTop dark style={{ background: "#34374C" }}>
          <NavbarBrand>
            <a href="/student">
              <img src={ logo } width="131" alt="Pillo"/>
            </a>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={ this.state.isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/forum">Forum</NavLink>
                <NavLink href="/group">My Group</NavLink>
                <NavLink href="/grades">Class Grades</NavLink>
                <NavLink href="/">Log Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <Card>
            <CardBody>
              <h1>CSE 134B</h1>
              <p color="muted">Winter 2018</p>
              <hr/>
              <Row>
                <Col xs="4">
                  <ListGroup>
                    <ListGroupItem tag="a" href="/group">
                      Group 1
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="/group">
                      Group 2
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="/group">
                      Group 3
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="/group">
                      Group 4
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="/group">
                      Group 5
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="/group">
                      Group 6
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="/group">
                      Group 7
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="/group">
                      Group 8
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="/group">
                      Group 9
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="/group">
                      Group 10
                    </ListGroupItem>
                  </ListGroup>
                </Col>
                <Col className="text-left">
                  <h3>Announcements</h3>
                  <hr/>
                  <p>PA3</p>
                  <p color="muted">Feb. 18,2018</p>
                  <ul>
                    <li>
                      Convert your PA2 hard-coded content such as to do list, chat
                      messages, to JavaScript objects. Then, use JavaScript to
                      populate the content to HTML.
                    </li>
                    <li>
                      Add in the JavaScript to make your page interactive to
                      user's events such as button-clicks (add, remove, update,
                      etc.). You do not need to store any data on the server. You
                      can use user's data to simulate event handling.
                    </li>
                  </ul>
                </Col>
              </Row>
              <br />
              <Row>
                <Button className="btn-block" color="primary" href="/forum">
                  Class Forum
                </Button>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    )
  }
}

export default StuClassPage;