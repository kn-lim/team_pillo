import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import logo from '../../images/logo.png';
import { NavLink as RRNavLink } from 'react-router-dom';

class SplashPage extends React.Component {
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
          <NavbarBrand tag={RRNavLink} to="/">
            <img src={logo} width="131" alt="Pillo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/login">
                  Login
                </NavLink>
                <NavLink tag={RRNavLink} to="/register">
                  Register
                </NavLink>">
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <div className="splash-text">
          <h1 className="display-1">Pillo</h1>
          <p className="lead">Class project management, made easy!</p>
          <p className="lead">
            Collaborate with other students on assignments and delegate tasks
            <br />Engage in discussions with your peers and instructors
            <br />Easily keep track of your progress and feedback
          </p>
          <p className="lead">Do it all on one convenient platform!</p>
          <Button color="faded">
            <NavLink tag={RRNavLink} to="/register">
              Register Now!
            </NavLink>
          </Button>
        </div>
      </div>
    );
  }
}

export default SplashPage;
