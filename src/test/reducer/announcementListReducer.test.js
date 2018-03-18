import reducer from '../../reducers/announcementListReducer';
import * as types from '../../constants/action-types';
describe('announcementListReducer', () => {
  it('should handle ADD_ANNOUNCEMENT', () => {
    expect(reducer(['Midterm is tommorrow'], types.ADD_ANNOUNCEMENT)).toEqual([
      'Midterm is tommorrow'
    ]);
  });
});
