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
  Container,
  Alert
} from 'reactstrap';
import logo from '../../images/logo.png';

class AddClassPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      code: '',
      visible: false
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCodeChange(evt) {
    this.setState({ code: evt.target.value });
  }

  handleSubmit(evt) {
    if (!this.canbeSubmitted()) {
      evt.preventDefault();
      return;
    } else {
      evt.preventDefault();
      this.setState({ visible: true });
    }
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  canbeSubmitted() {
    const errors = validate(this.state.code);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const errors = validate(this.state.code);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div>
        <Navbar dark style={{ background: '#34374C' }} expand="md">
          <NavbarBrand href="/student">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/add_class">Add Class</NavLink>
                <NavLink href="/">Log Out</NavLink>
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
            You have successfully joined CSE134B!
          </Alert>
          <Card body>
            <h1>Join a Class</h1>
            <hr />
            <p color="muted">Enter the 5-character course ID code:</p>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="classCode">Class Code</Label>
                <Input
                  type="text"
                  id="classCode"
                  onChange={this.handleCodeChange}
                  value={this.state.code}
                />
              </FormGroup>
              <Button disabled={isDisabled} color="primary">
                Join Class
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}

function validate(code) {
  return {
    code: code.length !== 5
  };
}

export default AddClassPage;
