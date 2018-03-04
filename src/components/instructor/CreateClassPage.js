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
  Alert,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  Container
} from 'reactstrap';
import logo from '../../images/logo.png';

class CreateClassPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      title: '',
      description: '',
      code: '',
      visible: false
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleTitleChange = evt => {
    this.setState({ title: evt.target.value });
  };

  handleDescriptionChange = evt => {
    this.setState({ description: evt.target.value });
  };

  handleSubmit = evt => {
    if (!this.canbeSubmitted()) {
      evt.preventDefault();
      return;
    } else {
      evt.preventDefault();
      this.setState({
        code: createClassId(),
        visible: true
      });
    }
  };

  onDismiss() {
    this.setState({ visible: false });
  }

  canbeSubmitted() {
    const errors = validate(this.state.title, this.state.description);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(this.state.title, this.state.description);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div>
        <Navbar fixedTop dark style={{ background: '#34374C' }}>
          <NavbarBrand>
            <a href="/">
              <img src={logo} width="131" alt="Pillo" />
            </a>
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

        <Container>
          <Alert
            color="info"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            You have successfully created {this.state.title} with ID:{' '}
            {this.state.code}
          </Alert>
          <Card body>
            <h1>Create a New Class</h1>
            <hr />
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <p color="muted">Enter the course name and number:</p>
                <Input
                  type="text"
                  id="courseName"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </FormGroup>
              <p color="muted">Enter the course information:</p>
              <Input
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                rows={4}
                className="textarea"
                type="textarea"
                id="courseInfo"
              />
              <br />
              <Button disabled={isDisabled} color="primary">
                Create Class
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}

function validate(title, description) {
  return {
    title: title.length === 0 || !validateTitle(title),
    description: description.length === 0
  };
}

function validateTitle(title) {
  var re = /^[a-z]+\s\d+[a-z]*$/i;
  return re.test(title);
}

function createClassId() {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export default CreateClassPage;
