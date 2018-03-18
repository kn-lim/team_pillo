import reducer from '../../reducers/announcementReducer';
import * as types from '../../constants/action-types';
describe('announcementReducer', () => {
  it('should handle EDIT_ANNOUNCEMENT', () => {
    expect(reducer('Midterm time changed', types.EDIT_ANNOUNCEMENT)).toEqual(
      'Midterm time changed'
    );
  });
});
