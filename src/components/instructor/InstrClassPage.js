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
  ModalFooter,
  ListGroupItem
} from 'reactstrap';
import logo from '../../images/logo.png';
import Announcement from '../common/Announcement';
import { NavLink as RRNavLink } from 'react-router-dom';
import AnnouncementList from '../common/AnnouncementList';
import AddAnnouncementButton from '../common/AddAnnouncementButton';

class InstrClassPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);

    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark style={{ background: '#34374C' }}>
          <NavbarBrand tag={RRNavLink} to="/instructor">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/instr_class">
                  Class
                </NavLink>
                <NavLink tag={RRNavLink} to="/forum">
                  Forum
                </NavLink>
                <NavLink tag={RRNavLink} to="/instr_class_list">
                  Class List
                </NavLink>
                <NavLink tag={RRNavLink} to="/create_assignment">
                  Create Assignment
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
              <h1>CSE 134B</h1>
              <p color="muted">Winter 2018</p>
              <hr />
              <Row>
                <Col xs="4">
                  <ListGroup>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 1
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 2
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 3
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 4
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 5
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 6
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 7
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 8
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 9
                    </ListGroupItem>
                    <ListGroupItem tag={RRNavLink} to="/group">
                      Group 10
                    </ListGroupItem>
                  </ListGroup>
                </Col>
                <Col>
                  <h3>Announcements</h3>
                  <hr />
                  <AnnouncementList />
                  <AddAnnouncementButton />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs="12">
                  <ListGroupItem tag={RRNavLink} to="/forum">
                    Class Forum
                  </ListGroupItem>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default InstrClassPage;
