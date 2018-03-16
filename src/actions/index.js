export const setUsername = username => ({
  type: 'SET_USERNAME',
  payload: username
});

export const addChecklist = checklist => ({
  type: 'ADD_CHECKLIST',
  payload: checklist
});

export const removeChecklist = checklist => ({
  type: 'REMOVE_CHECKLIST',
  payload: checklist
});

export const addMember = member => ({
  type: 'ADD_MEMBER',
  payload: member
});

export const addAnnouncement = announcementList => ({
  type: 'ADD_ANNOUNCEMENT',
  payload: announcementList
});

export const editAnnouncement = announcement => ({
  type: 'EDIT_ANNOUNCEMENT',
  payload: announcement
});
