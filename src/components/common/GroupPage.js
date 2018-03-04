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
  Progress,
  Label,
  Input,
  Card,
  CardBody,
  Row,
  Col,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import logo from '../../images/logo.png';

class GroupPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      progress: '34',
      member4: false,
      name4: '',
      member5: false,
      name5: '',
      name: '',
      memberModal: false,
      file2: false,
      file_name2: '',
      file3: false,
      file_name3: '',
      file: '',
      checklist3: false,
      checklist3_name: '',
      checklist: '',
      checklistModal: false
    };

    this.toggleMemberModal = this.toggleMemberModal.bind(this);
    this.toggleChecklistModal = this.toggleChecklistModal.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };
  handleFileChange = evt => {
    this.setState({ file: evt.target.value });
  };
  handleChecklistChange = evt => {
    this.setState({ checklist: evt.target.value });
  };

  toggleMemberModal() {
    this.setState({
      memberModal: !this.state.memberModal,
      name: ''
    });
  }
  toggleChecklistModal() {
    this.setState({
      checklistModal: !this.state.checklistModal,
      checklist: ''
    });
  }

  handleAddMemberSubmit = evt => {
    if (!this.state.member4) {
      this.setState({
        member4: true,
        name4: this.state.name,
        memberModal: !this.state.memberModal
      });
    } else {
      if (!this.state.member5) {
        this.setState({
          member5: true,
          name5: this.state.name,
          memberModal: !this.state.memberModal
        });
      } else {
        this.setState({
          memberModal: !this.state.memberModal
        });
      }
    }
  };

  handleAddItemSubmit = evt => {
    if (!this.state.checklist3) {
      this.setState({
        checklist3: true,
        checklist3_name: this.state.checklist,
        checklistModal: !this.state.checklistModal
      });
    } else {
      this.setState({
        checklistModal: !this.state.checklistModal
      });
    }
  };

  handleAddFileClick = evt => {
    if (!this.state.file2) {
      this.setState({
        file2: true,
        file_name2: this.state.file,
        progress: '50'
      });
    } else {
      if (!this.state.file3) {
        this.setState({
          file3: true,
          file_name3: this.state.file,
          progress: '75'
        });
      } else {
        return;
      }
    }
  };

  render() {
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

        <Container>
          <Card>
            <CardBody>
              <h1>Group 1</h1>
              <p color="muted">CSE 134B - Winter 2018</p>
              <hr />
              <Row>
                <Col className="text-left">
                  <p>Members:</p>
                  <ul id="member_list">
                    <li>Kevin Lim</li>
                    <li>Ken Truong</li>
                    <li>Perry Liu</li>
                    <li hidden={!this.state.member4}>{this.state.name4}</li>
                    <li hidden={!this.state.member5}>{this.state.name5}</li>
                  </ul>
                  <Button
                    onClick={this.toggleMemberModal}
                    color="primary"
                    id="add_member"
                  >
                    Add Member
                  </Button>{' '}
                  {/*     <Button color="danger" id="remove_member"> 
                    Remove Member
                  </Button> */}
                  <br />
                  <p>Project Progress:</p>
                  <Progress
                    animated
                    value={this.state.progress}
                    max="100"
                    id="progress_bar"
                  />
                  <br />
                  <p>Files:</p>
                  <ul id="file_list">
                    <li>index.html</li>
                    <li hidden={!this.state.file2}>{this.state.file_name2}</li>
                    <li hidden={!this.state.file3}>{this.state.file_name3}</li>
                  </ul>
                  <Row>
                    <Col xs="3">
                      <p>Submit Files:</p>
                    </Col>
                    <Col xs="7">
                      <Input
                        value={this.state.file}
                        onChange={this.onFileChange}
                        type="file"
                        name="text"
                        id="inputFile"
                      />
                    </Col>
                  </Row>
                  <Button onClick={this.handleAddFileClick} color="mute">
                    Submit
                  </Button>
                </Col>
                <Col className="text-left">
                  <h4>Checklist:</h4>
                  <hr />
                  <FormGroup check>
                    <Input type="checkbox" id="checklist1" checked />
                    <Label for="checklist1">
                      Create mockup of pages for app
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" id="checklist2" />
                    <Label for="checklist2">Code the pages in HTML/CSS</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" id="checklist3" />
                    <Label for="checklist3">
                      Add Javascript functionality to website
                    </Label>
                  </FormGroup>
                  <br />
                  <p color="muted">Custom Items:</p>
                  <FormGroup check>
                    <Input type="checkbox" id="checklist1" />
                    <Label for="checklist1">
                      Add Javascript functionality to misc. buttons
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" id="checklist2" />
                    <Label for="checklist2">Unit Testing</Label>
                  </FormGroup>
                  <FormGroup check hidden={!this.state.checklist3}>
                    <Input type="checkbox" id="checklist3" />
                    <Label for="checklist3">{this.state.checklist3_name}</Label>
                  </FormGroup>
                  <br />
                  <Button
                    onClick={this.toggleChecklistModal}
                    color="primary"
                    id="add_item"
                  >
                    Add Item
                  </Button>{' '}
                  {/*}   <Button color="danger" id="remove_item"> 
                    Remove Item
                  </Button> */}
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Modal
            isOpen={this.state.memberModal}
            toggle={this.toggleMemberModal}
          >
            <ModalHeader toggle={this.toggleMemberModal}>
              Add a member
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <p color="muted">
                    Enter the name of the member you wish to add:
                  </p>
                  <Input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleAddMemberSubmit}>
                Add Member
              </Button>{' '}
              <Button color="secondary" onClick={this.toggleMemberModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
          <Modal
            isOpen={this.state.checklistModal}
            toggle={this.toggleChecklistModal}
          >
            <ModalHeader toggle={this.toggleChecklistModal}>
              Add a checklist item
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <p color="muted">Enter custom checklist item:</p>
                  <Input
                    type="text"
                    value={this.state.checklist}
                    onChange={this.handleChecklistChange}
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleAddItemSubmit}>
                Add Item
              </Button>{' '}
              <Button color="secondary" onClick={this.toggleChecklistModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default GroupPage;
