import reducer from '../../reducers/checklistReducer';
import * as types from '../../constants/action-types';
describe('checklistReducer', () => {
  it('should handle ADD_CHECKLIST', () => {
    expect(reducer(['task1', 'task2'], types.ADD_CHECKLIST)).toEqual([
      'task1',
      'task2'
    ]);
  });
  it('should handle REMOVE_CHECKLIST', () => {
    expect(reducer([], types.REMOVE_CHECKLIST)).toEqual([]);
  });
});
