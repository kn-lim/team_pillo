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
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    // const sel = document.getElementById('classification');
    // const sel_val = sel.options[sel.selectedIndex].value;
    // let button = null;
    // console.log(sel_val);
    // if (sel_val == 'Student') {
    //   button = <Button color="primary" type="submit" value="Submit">Sign Up</Button>;
    // } else {
    //   button = <Button color="primary" type="submit" value="Submit">Sign Up</Button>;
    // }

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
            <h1>Register</h1>
            <hr/>
            <Form>
            {/* <Form onSubmit={ this.handleSubmit }> */}
              <FormGroup>
                <Label for="inputFirstName">First Name</Label>
                <Input
                  type="text"
                  id="inputFirstName"
                  placeholder="Enter your first name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="inputLastName">Last Name</Label>
                <Input
                  type="text"
                  id="inputLastName"
                  placeholder="Enter your last name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="inputEmail">Email Address</Label>
                <Input type="email" id="inputEmail" placeholder="Enter email" />
              </FormGroup>
              <FormGroup>
                <Label for="inputPassword">Password</Label>
                <Input
                  type="password"
                  id="inputPassword"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="classification">Register As</Label>
                <Input type="select" name="select" id="classification">
                {/* <Input type="select" name="select" id="classification" value={this.state.value} onChange={this.handleChange}> */}
                  <option>Student</option>
                  <option>Teacher</option>
                </Input>
              </FormGroup>
              <Button color="primary">Sign Up</Button>
              {/* <Button color="primary" type="submit" value="Submit">Sign Up</Button> */}
            </Form>
            {/* Temporary */}
            <a href="/student">Student Home</a>
            <a href="/instructor">Instructor Home</a>
          </Card>
        </Container>
      </div>
    )
  }
}

export default RegisterPage;