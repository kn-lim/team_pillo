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
  ListGroup
} from 'reactstrap';
import logo from '../../images/logo.png';
import ListGroupLink from '../common/ListGroupLink';

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
        <Navbar fixedTop dark style={{ background: '#34374C' }}>
          <NavbarBrand>
            <a href="/student">
              <img src={logo} width="131" alt="Pillo" />
            </a>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
              <hr />
              <Row>
                <Col xs="4">
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
                  <ListGroupLink text="Class Forum" linkTo="/forum" />
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
