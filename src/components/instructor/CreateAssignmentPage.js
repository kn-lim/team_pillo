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
  Input,
  Card,
  Container
} from 'reactstrap';
import logo from '../../images/logo.png';

class CreateAssignmentPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      title: '',
      description: '',
      code: '',
      checkpoint1: '',
      checkpoint2: '',
      checkpoint3: '',
      checkpointToggle: true,
      visible: false,
      visible2: false
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onDismiss2 = this.onDismiss2.bind(this);
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

  handleCheckpoint1Change = evt => {
    this.setState({ checkpoint1: evt.target.value });
  };
  handleCheckpoint2Change = evt => {
    this.setState({ checkpoint2: evt.target.value });
  };
  handleCheckpoint3Change = evt => {
    this.setState({ checkpoint3: evt.target.value });
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

  handleClick = evt => {
    if (this.state.checkpointToggle) {
      this.setState({ checkpointToggle: false });
    } else {
      this.setState({ visible2: true });
    }
  };

  onDismiss() {
    this.setState({ visible: false });
  }
  onDismiss2() {
    this.setState({ visible2: false });
  }

  canbeSubmitted() {
    const errors = validate(
      this.state.title,
      this.state.description,
      this.state.checkpoint1,
      this.state.checkpoint2,
      this.state.checkpoint3,
      this.state.checkpointToggle
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  render() {
    const errors = validate(
      this.state.title,
      this.state.description,
      this.state.checkpoint1,
      this.state.checkpoint2,
      this.state.checkpoint3,
      this.state.checkpointToggle
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div>
        <Navbar dark style={{ background: '#34374C' }}>
          <NavbarBrand href="/instructor">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/class">Class</NavLink>
                <NavLink href="/create_class">Class List</NavLink>
                <NavLink href="/create_assignment">Create Assignment</NavLink>
                <NavLink href="/grades">Grades</NavLink>
                <NavLink href="/">Log Out</NavLink>
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
            Assignment {this.state.title} has been successfully created.
          </Alert>
          <Alert
            color="danger"
            isOpen={this.state.visible2}
            toggle={this.onDismiss2}
          >
            Only a maximum of 3 checkpoints can be created initially.
          </Alert>
          <Card body>
            <h1>Create a New Assignment</h1>
            <hr />
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <p color="muted">Enter the assignment name:</p>
                <Input
                  type="text"
                  id="assignmentName"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </FormGroup>
              <FormGroup>
                <p color="muted">Enter the assignment information:</p>
                <Input
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                  rows={4}
                  className="textarea"
                  type="textarea"
                  id="courseInfo"
                />
              </FormGroup>
              <FormGroup id="checkpoints">
                <p>Checkpoint 1:</p>
                <Input
                  type="text"
                  id="checkpoint1"
                  value={this.state.checkpoint1}
                  onChange={this.handleCheckpoint1Change}
                />
                <p>Checkpoint 2:</p>
                <Input
                  type="text"
                  id="checkpoint2"
                  value={this.state.checkpoint2}
                  onChange={this.handleCheckpoint2Change}
                />
                <div hidden={this.state.checkpointToggle}>
                  <p>Checkpoint 3:</p>
                  <Input
                    type="text"
                    id="checkpoint3"
                    value={this.state.checkpoint3}
                    onChange={this.handleCheckpoint3Change}
                  />
                </div>
              </FormGroup>
              <Button id="addCheckpoint" onClick={this.handleClick}>
                Add another checkpoint
              </Button>
              <br />
              <br />

              <Button disabled={isDisabled} color="primary">
                Create Assignment
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    );
  }
}

function validate(
  title,
  description,
  checkpoint1,
  checkpoint2,
  checkpoint3,
  checkpointToggle
) {
  return {
    title: title.length === 0,
    description: description.length === 0,
    checkpoint1: checkpoint1.length === 0,
    checkpoint2: checkpoint2.length === 0,
    checkpoint3: validateExtra(checkpoint3, checkpointToggle)
  };
}

function validateExtra(checkpoint3, checkpointToggle) {
  if (checkpointToggle) {
    return false;
  } else {
    return checkpoint3.length === 0;
  }
}

export default CreateAssignmentPage;
