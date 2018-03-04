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
  Row,
  Col,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import logo from '../../images/logo.png';
import ListGroupLink from '../common/ListGroupLink';
import Announcement from '../common/Announcement';

class InstrClassPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);

    this.state = {
      isOpen: false,
      isNavOpen: false,
      modal: false,
      announcementToggle: false,
      announcementTitle: '',
      announcementInfo: '',
      announcementDate: '',
      completeTitle: '',
      completeInfo: ''
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      modal: !this.state.modal,
      announcementToggle: false,
      announcementTitle: '',
      announcementInfo: ''
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  handleTitleChange(evt) {
    this.setState({ announcementTitle: evt.target.value });
  }
  handleInfoChange(evt) {
    this.setState({ announcementInfo: evt.target.value });
  }

  handleSubmit(evt) {
    this.setState({
      announcementToggle: true,
      completeTitle: this.state.announcementTitle,
      completeInfo: this.state.announcementInfo,
      announcementDate: 'Mar. 4, 2018',
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Navbar dark style={{ background: '#34374C' }}>
          <NavbarBrand href="/instructor">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/instr_class">Class</NavLink>
                <NavLink href="/forum">Forum</NavLink>
                <NavLink href="/create_class">Class List</NavLink>
                <NavLink href="/create_assignment">Create Assignment</NavLink>
                <NavLink href="/grades">Grades</NavLink>
                <NavLink href="/">Log Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <Card>
            <CardBody>
              <h1>CSE 134B</h1>
              <p color="muted">Winter 2018</p>
              <hr />
              <Row>
                <Col xs="4">
                  <ListGroup>
                    <ListGroupLink text="Group 1" linkTo="/group" />
                    <ListGroupLink text="Group 2" linkTo="/group" />
                    <ListGroupLink text="Group 3" linkTo="/group" />
                    <ListGroupLink text="Group 4" linkTo="/group" />
                    <ListGroupLink text="Group 5" linkTo="/group" />
                    <ListGroupLink text="Group 6" linkTo="/group" />
                    <ListGroupLink text="Group 7" linkTo="/group" />
                    <ListGroupLink text="Group 8" linkTo="/group" />
                    <ListGroupLink text="Group 9" linkTo="/group" />
                    <ListGroupLink text="Group 10" linkTo="/group" />
                  </ListGroup>
                </Col>
                <Col>
                  <h3>Announcements</h3>
                  <hr />
                  <div>
                    {' '}
                    {this.state.announcementToggle ? (
                      <Announcement
                        title={this.state.completeTitle}
                        date={this.state.announcementDate}
                        description={this.state.completeInfo}
                      />
                    ) : null}
                  </div>
                  <Announcement
                    title="PA3"
                    date="Feb. 18, 2018"
                    description="Convert your PA2 hard-coded content such as to do list, chat messages, to JavaScript objects. Then, use JavaScript to populate the content to HTML."
                  />
                  <Button
                    color="primary"
                    onClick={this.toggle}
                    id="add_announcement"
                  >
                    Add Annoucement
                  </Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs="12">
                  <ListGroupLink text="Class Forum" linkTo="/forum" />
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>
              Add a new announcement
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <p color="muted">Enter the announcement title:</p>
                  <Input
                    type="text"
                    value={this.state.announcementTitle}
                    onChange={this.handleTitleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <p color="muted">Enter the announcement details:</p>
                  <Input
                    type="textarea"
                    value={this.state.announcementInfo}
                    onChange={this.handleInfoChange}
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

export default InstrClassPage;
