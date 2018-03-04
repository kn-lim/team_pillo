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
} from 'reactstrap';
import logo from '../../images/logo.png';

class ForgotPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { value: '', isOpen: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('An email with recovery information has been sent to ' + this.state.value);
    event.preventDefault();
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
            <h1 className="display-4">Forgot Your Password?</h1>
            <hr/>
            <p className="text-muted">Enter the email address of the account and a password reset email will be sent to you!
            </p>
            <Form onSubmit={ this.handleSubmit }>
              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input value={this.state.value} onChange={this.handleChange} type="email" name="email" id="email" placeholder="Enter your Email Address" />
              </FormGroup>
              <Button color="primary" type="submit" value="Submit">Reset Password</Button>
            </Form>
          </Card>
        </Container>
      </div>
    )
  }
}

export default ForgotPasswordPage;