import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import logo from '../../images/logo.png';

class RegisterPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      register: 'Student',
      touched: {
        first_name: false,
        last_name: false,
        email: false,
        password: false,
        confirm_password: false
      }
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
    this.handleRegisterChange = this.handleRegisterChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleFirstNameChange(evt) {
    this.setState({ first_name: evt.target.value });
  }
  handleLastNameChange(evt) {
    this.setState({ last_name: evt.target.value });
  }
  handleEmailChange(evt) {
    this.setState({ email: evt.target.value });
  }
  handlePasswordChange(evt) {
    this.setState({ password: evt.target.value });
  }
  handleConfirmPasswordChange(evt) {
    this.setState({ confirm_password: evt.target.value });
  }
  handleRegisterChange(evt) {
    this.setState({ register: evt.target.value });
  }

  handleSubmit(evt) {
    const { register } = this.state;
    if (!this.canbeSubmitted()) {
      evt.preventDefault();
      return;
    } else {
      if (register === 'Student') {
        evt.preventDefault();
        window.location = '/student';
      } else {
        evt.preventDefault();
        window.location = '/instructor';
      }
    }
  }

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  canbeSubmitted() {
    const errors = validate(
      this.state.first_name,
      this.state.last_name,
      this.state.email,
      this.state.password,
      this.state.confirm_password
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(
      this.state.first_name,
      this.state.last_name,
      this.state.email,
      this.state.password,
      this.state.confirm_password
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };

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

        <Container style={{ textAlign: 'center' }} onSubmit={this.handleSubmit}>
          <Card body>
            <h1>Register</h1>
            <hr />
            <Form>
              {/* <Form onSubmit={ this.handleSubmit }> */}
              <FormGroup>
                <Label for="inputFirstName">First Name</Label>
                <Input
                  style={
                    shouldMarkError('first_name')
                      ? { borderColor: 'red' }
                      : { borderColor: '' }
                  }
                  value={this.state.first_name}
                  onChange={this.handleFirstNameChange}
                  onBlur={this.handleBlur('first_name')}
                  type="text"
                  id="inputFirstName"
                  placeholder="Enter your first name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="inputLastName">Last Name</Label>
                <Input
                  style={
                    shouldMarkError('last_name')
                      ? { borderColor: 'red' }
                      : { borderColor: '' }
                  }
                  value={this.state.last_name}
                  onChange={this.handleLastNameChange}
                  onBlur={this.handleBlur('last_name')}
                  type="text"
                  id="inputLastName"
                  placeholder="Enter your last name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="inputEmail">Email Address</Label>
                <Input
                  style={
                    shouldMarkError('email')
                      ? { borderColor: 'red' }
                      : { borderColor: '' }
                  }
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  onBlur={this.handleBlur('email')}
                  type="email"
                  id="inputEmail"
                  placeholder="Enter email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="inputPassword">Password</Label>
                <Input
                  style={
                    shouldMarkError('password')
                      ? { borderColor: 'red' }
                      : { borderColor: '' }
                  }
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  onBlur={this.handleBlur('password')}
                  type="password"
                  id="inputPassword"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                  style={
                    shouldMarkError('confirm_password')
                      ? { borderColor: 'red' }
                      : { borderColor: '' }
                  }
                  value={this.state.confirm_password}
                  onChange={this.handleConfirmPasswordChange}
                  onBlur={this.handleBlur('confirm_password')}
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="classification">Register As</Label>
                <Input
                  type="select"
                  id="classification"
                  value={this.state.register}
                  onChange={this.handleRegisterChange}
                >
                  <option>Student</option>
                  <option>Teacher</option>
                </Input>
              </FormGroup>
              <Button disabled={isDisabled} color="primary">
                Sign Up
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}

function validate(first_name, last_name, email, password, confirm_password) {
  return {
    first_name: first_name.length === 0,
    last_name: last_name.length === 0,
    email: email.length === 0 || !validateEmail(email),
    password: password.length === 0,
    confirm_password:
      confirm_password !== password || confirm_password.length === 0
  };
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default RegisterPage;
