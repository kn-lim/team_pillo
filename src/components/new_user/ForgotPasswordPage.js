import React from 'react';
import {
  Alert,
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
} from 'reactstrap';
import logo from '../../images/logo.png';

class ForgotPasswordPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      email: '',
      isOpen: false,
      visible: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  handleChange = evt => {
    this.setState({ value: evt.target.value });
  };

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handleSubmit = evt => {
    if (!this.canbeSubmitted()) {
      evt.preventDefault();
      return;
    } else {
      evt.preventDefault();
      this.setState({ visible: true });
    }
  };

  onDismiss() {
    this.setState({ visible: false });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  canbeSubmitted() {
    const errors = validate(this.state.email);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(this.state.email);
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
          <Alert
            color="success"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            A password reset email has been sent to {this.state.email}!
          </Alert>
          <Card body>
            <h1 className="display-4">Forgot Your Password?</h1>
            <hr />
            <p className="text-muted">
              Enter the email address of the account and a password reset email
              will be sent to you!
            </p>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input
                  type="email"
                  id="forgottenEmail"
                  placeholder="Enter email"
                  onChange={this.handleEmailChange}
                  value={this.state.email}
                />
              </FormGroup>
              <Button disabled={isDisabled} color="primary">
                Reset Password
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}

function validate(email) {
  return {
    email: !validateEmail(email)
  };
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default ForgotPasswordPage;
