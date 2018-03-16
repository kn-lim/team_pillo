import React from 'react';
import { connect } from 'react-redux';
import { editAnnouncement } from '../../actions/index';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  ModalFooter
} from 'reactstrap';
const mapDispatchToProps = dispatch => {
  return {
    editAnnouncement: announcement => dispatch(editAnnouncement(announcement))
  };
};

const mapStateToProps = state => {
  return { announcement: state.announcement };
};

var buttonstyle = {
  padding: '0px 3px 0px 3px',
  margin: '0px 0px 0px 5px'
};

class ConnectedAnnouncement extends React.Component {
  constructor(props) {
    super(props);

    if (
      props.announcement.length !== 0 &&
      props.id == props.announcement.announcement.announcement.id
    ) {
      this.state = {
        title: props.announcement.announcement.announcement.title,
        modal: false,
        description: props.announcement.announcement.announcement.description,
        date: props.date
      };
    } else {
      this.state = {
        modal: false,
        title: props.title,
        date: props.date,
        description: props.description,
        id: props.id
      };
    }
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(evt) {
    this.setState({ title: evt.target.value });
  }
  handleInfoChange(evt) {
    this.setState({ description: evt.target.value });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.toggle();
    const announcement = this.state;
    this.props.editAnnouncement({ announcement });
  }

  render() {
    return (
      <div>
        <a>{this.state.title}</a>{' '}
        <Button style={buttonstyle} onClick={this.toggle} color="faded">
          Edit
        </Button>
        <li color="muted">{this.state.date}</li>
        <p>{this.state.description}</p>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add a new announcement</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <p color="muted">Enter the announcement title:</p>
                <Input
                  type="text"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </FormGroup>
              <FormGroup>
                <p color="muted">Enter the announcement details:</p>
                <Input
                  type="textarea"
                  value={this.state.description}
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
      </div>
    );
  }
}

const Announcement = connect(mapStateToProps, mapDispatchToProps)(
  ConnectedAnnouncement
);
export default Announcement;
