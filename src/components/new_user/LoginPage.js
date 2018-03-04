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
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      email: '',
      password: ''
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };
  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleStudentSubmit = evt => {
    if (!this.canbeSubmitted()) {
      evt.preventDefault();
      return;
    } else {
      evt.preventDefault();
      window.location = '/student_home';
    }
  };
  handleInstructorSubmit = evt => {
    if (!this.canbeSubmitted()) {
      evt.preventDefault();
      return;
    } else {
      evt.preventDefault();
      window.location = '/instructor_home';
    }
  };

  canbeSubmitted() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div>
        <Navbar dark style={{ background: '#34374C' }}>
          <NavbarBrand href="/">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container style={{ textAlign: 'center' }}>
          <Card body>
            <h1 className="display-4">Log In</h1>
            <hr />
            <Form>
              <FormGroup>
                <Label for="exampleInputEmail">Email Address</Label>
                <Input
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  id="exampleInputEmail"
                  placeholder="Enter email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleInputPassword">Password</Label>
                <Input
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  id="exampleInputPassword"
                  placeholder="Password"
                />
              </FormGroup>
              <Button
                onClick={this.handleStudentSubmit}
                disabled={isDisabled}
                color="primary"
              >
                Log In As Student
              </Button>
              &nbsp;
              <Button
                onClick={this.handleInstructorSubmit}
                disabled={isDisabled}
                color="warning"
              >
                Log In As Instructor
              </Button>
            </Form>
            <br />
            <a href="/forgot_password">Forgot Password?</a>
            <br />
          </Card>
        </Container>
      </div>
    );
  }
}

function validate(email, password) {
  return {
    email: email.length === 0,
    password: password.length === 0
  };
}

export default LoginPage;
