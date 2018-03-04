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
  Input,
  Card,
  Container
} from 'reactstrap';
import logo from '../../images/logo.png';

class AddClassPage extends React.Component {
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
        <Navbar fixedTop dark style={{ background: "#34374C" }} expand="md">
          <NavbarBrand>
            <a href="/student">
              <img src={ logo } width="131" alt="Pillo"/>
            </a>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={ this.state.isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/add_class">Add Class</NavLink>
                <NavLink href="/">Log Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container style={{ textAlign: "center" }}>
          <Card body>
            <h1>Join a Class</h1>
            <hr/>
            <p color="muted">Enter the 5-character course ID code:</p>
            <Form>
              <FormGroup>
                <Label for="classCode">Class Code</Label>
                <Input type="text" id="classCode"/>
              </FormGroup>
              <Button color="primary">Join Class</Button>
            </Form>
          </Card>
        </Container>
      </div>
    )
  }
}

export default AddClassPage;