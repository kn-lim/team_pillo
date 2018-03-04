import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Container
} from 'reactstrap';
import logo from '../../images/logo.png';

class StuHomePage extends React.Component {
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
        <Navbar fixedTop dark style={{ background: "#34374C" }}>
          <NavbarBrand>
            <a href="/student">
              <img src={ logo } width="131" alt="Pillo"/>
            </a>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={ this.state.isOpen } navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/add_class">Add Class</NavLink>
                <NavLink href="/">Log Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <Row>
            <h1>Hello, student!</h1>
          </Row>
          <br />
          <Row>
            <Col>
              <Card body>
                <CardTitle>
                  <a href="/stu_class">CSE 134B</a>
                </CardTitle>
                <CardSubtitle>Winter 2018</CardSubtitle>
                <hr/>
                <div className="text-left">
                  <p color="muted">Members:</p>
                  <ul>
                    <li>Kevin Lim</li>
                    <li>Ken Truong</li>
                    <li>Perry Liu</li>
                  </ul>
                  <p color="muted">Checklist:</p>
                  <FormGroup check>
                    <Input type="checkbox" id="checklist1" />
                    <Label for="checklist1">Create mockup of pages for app</Label>
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
                </div>
              </Card>
            </Col>
            <Col>
              <Card body>
                <CardTitle>
                  <a href="/stu_class">COGS 108</a>
                </CardTitle>
                <CardSubtitle>Winter 2018</CardSubtitle>
                <hr/>
                <div className="text-left">
                  <p color="muted">Members:</p>
                  <ul>
                    <li>Kevin Lim</li>
                  </ul>
                  <p color="muted">Checklist:</p>
                  <FormGroup check>
                    <Input type="checkbox" id="checklist4" />
                    <Label for="checklist1">PA1</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" id="checklist5" />
                    <Label for="checklist2">PA2</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" id="checklist6" />
                    <Label for="checklist3">PA3</Label>
                  </FormGroup>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default StuHomePage;