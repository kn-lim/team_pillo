import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAnnouncement } from '../../actions/index';
import uuidv1 from 'uuid';
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
    addAnnouncement: announcementList =>
      dispatch(addAnnouncement(announcementList))
  };
};

var buttonstyle = {
  padding: '5px 10px 5px 10px',
  margin: '10px 10px 0px 0px'
};

class ConnectedAddAnnouncementButton extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      modal: false,
      announcementToggle: false,
      announcementTitle: '',
      announcementInfo: '',
      announcementDate: '',
      completeTitle: '',
      completeInfo: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ label: event.target.value });
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
      announcementDate: 'Mar. 18, 2018'
    });
    const id = uuidv1();
    const title = this.state.announcementTitle;
    const description = this.state.announcementInfo;
    const date = 'Mar. 18, 2018';
    this.props.addAnnouncement({ title, description, date, id });
    this.setState({
      modal: !this.state.modal
    });
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
  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} id="add_announcement">
          Add Annoucement
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add a new announcement</ModalHeader>
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
      </div>
    );
  }
}

const AddAnnouncementButton = connect(null, mapDispatchToProps)(
  ConnectedAddAnnouncementButton
);

export default AddAnnouncementButton;
