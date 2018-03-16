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
  Input,
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import logo from '../../images/logo.png';
import { NavLink as RRNavLink } from 'react-router-dom';

class ForumPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isNavOpen: false,
      post1: false,
      post2: false,
      post3: false,
      post4: false,
      link4: false,
      modal: false,
      title: '',
      description: '',
      set_title: '',
      set_description: ''
    };
    this.toggleNav = this.toggleNav.bind(this);

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      modal: !this.state.modal,
      title: '',
      description: ''
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  handleTitleChange(evt) {
    this.setState({ title: evt.target.value });
  }
  handleDescriptionChange(evt) {
    this.setState({ description: evt.target.value });
  }

  handleSubmit(evt) {
    this.setState({
      set_title: this.state.title,
      set_description: this.state.description,
      link4: true,
      modal: !this.state.modal
    });
  }

  handleClick1(evt) {
    this.setState({
      post1: true,
      post2: false,
      post3: false,
      post4: false
    });
  }
  handleClick2(evt) {
    this.setState({
      post1: false,
      post2: true,
      post3: false,
      post4: false
    });
  }
  handleClick3(evt) {
    this.setState({
      post1: false,
      post2: false,
      post3: true,
      post4: false
    });
  }
  handleClick4(evt) {
    this.setState({
      post1: false,
      post2: false,
      post3: false,
      post4: true
    });
  }

  render() {
    return (
      <div>
        <Navbar dark style={{ background: '#34374C' }}>
          <NavbarBrand tag={RRNavLink} to="/stu_class">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/stu_class">
                  Class
                </NavLink>
                <NavLink tag={RRNavLink} to="/forum">
                  Forum
                </NavLink>
                <NavLink tag={RRNavLink} to="/grades">
                  Grades
                </NavLink>
                <NavLink tag={RRNavLink} to="/">
                  Log Out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <Card>
            <CardBody>
              <h1>CSE 134B - Forum</h1>
              <p color="muted">Winter 2018</p>
              <hr />
              <Row>
                <Col xs="4">
                  <ListGroup>
                    <ListGroupItem onClick={this.handleClick1} tag="button">
                      What time is it
                    </ListGroupItem>
                    <ListGroupItem onClick={this.handleClick2} tag="button">
                      Where is the midterm
                    </ListGroupItem>
                    <ListGroupItem onClick={this.handleClick3} tag="button">
                      Can I get an A
                    </ListGroupItem>
                    <ListGroupItem
                      hidden={!this.state.link4}
                      onClick={this.handleClick4}
                      tag="button"
                    >
                      {this.state.set_title}
                    </ListGroupItem>
                  </ListGroup>
                  <br />
                  <Button onClick={this.toggle}>Add Post</Button>
                </Col>
                <Col className="text-center">
                  <Card hidden>
                    <h3>Create New Post</h3>
                    <br />
                    <Input type="text" placeholder="Enter Question Title" />
                    <br />
                    <Input
                      type="textarea"
                      rows="4"
                      placeholder="Enter question content"
                    />
                    <br />
                    <Button>Submit</Button>
                  </Card>
                  <Card hidden={!this.state.post1}>
                    <h3>What time is it</h3>
                    <p>help im confused on the time</p>
                  </Card>
                  <Card hidden={!this.state.post2}>
                    <h3>Where is the midterm</h3>
                    <p>do we even have a midterm?...</p>
                  </Card>
                  <Card hidden={!this.state.post3}>
                    <h3>Can I get an A</h3>
                    <p>haven't gone to lecture yet</p>
                  </Card>
                  <Card hidden={!this.state.post4}>
                    <h3>{this.state.set_title}</h3>
                    <p>{this.state.set_description}</p>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Add a new post</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <p color="muted">Enter question title:</p>
                  <Input
                    type="text"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <p color="muted">Enter the question content:</p>
                  <Input
                    type="textarea"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                    className="textarea"
                    rows={4}
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleSubmit}>
                Submit
              </Button>{' '}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default ForumPage;
