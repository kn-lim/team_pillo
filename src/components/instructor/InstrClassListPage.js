import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Card,
  CardBody,
  Table,
  Row,
  Col,
  Container
} from 'reactstrap';
import logo from '../../images/logo.png';
import { NavLink as RRNavLink } from 'react-router-dom';

class InstrClassListPage extends React.Component {
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
    return (
      <div>
        <Navbar dark style={{ background: '#34374C' }}>
          <NavbarBrand tag={RRNavLink} to="/instructor">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
                <Col>
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Student List</th>
                        <th>Is TA?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ken Truong</td>
                        <td>
                          <Input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Kevin Lim</td>
                        <td>
                          <Input type="checkbox" />
                        </td>
                      </tr>
                      <tr>
                        <td>Perry Liu</td>
                        <td>
                          <Input type="checkbox" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default InstrClassListPage;
