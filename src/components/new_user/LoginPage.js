import React from 'react';
import { 
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // Tooltip
} from 'reactstrap';
import logo from '../../images/logo.png';

class LoginPage extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     tooltipOpen: false
  //   };
  // }

  // toggle() {
  //   this.setState({
  //     tooltipOpen: !this.state.tooltipOpen
  //   });
  // }

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

        <Container style={{ textAlign: "center" }}>
          <Card body>
            <h1 className="display-4">Log In</h1>
            <hr/>
            <Form>
              <FormGroup>
                <Label for="exampleInputEmail">Email Address</Label>
                <Input
                  type="email"
                  id="exampleInputEmail"
                  placeholder="Enter email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword">Password</Label>
                <Input
                  type="password"
                  id="exampleInputPassword"
                  placeholder="Password"
                />
              </FormGroup>
              <Button color="primary" href="/register" id="tooltip">Log In</Button>
              {/* <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="tooltip" toggle={this.toggle}>
                Since there is no back-end, this will lead you to the register page
              </Tooltip> */}
            </Form>
            <br/>
            <a href="/forgot_password">Forgot Password?</a>
            <br/>
          </Card>
        </Container>
      </div>
    )
  }
}

export default LoginPage;