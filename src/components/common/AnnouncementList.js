import React from 'react';
import { Col } from 'reactstrap';
import { connect } from 'react-redux';
import Announcement from './Announcement';

const mapStateToProps = state => {
  return { announcementList: state.announcementList };
};

var colStyle = {
  padding: '0px 5px 0px 19px'
};

const ConnectedAnnouncementList = ({ announcementList }) => (
  console.log(announcementList),
  (
    <div>
      {announcementList.map(el => (
        <div key={el.id}>
          <Announcement
            id={el.id}
            key={el.id}
            title={el.title}
            date={el.date}
            description={el.description}
          />
        </div>
      ))}
    </div>
  )
);

const announcementList = connect(mapStateToProps)(ConnectedAnnouncementList);

export default announcementList;
