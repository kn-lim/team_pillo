import reducer from '../../reducers/memberReducer';
import * as types from '../../constants/action-types';
describe('memberReducer', () => {
  it('should handle ADD_MEMBER', () => {
    expect(reducer(['jake', 'bill'], types.ADD_MEMBER)).toEqual([
      'jake',
      'bill'
    ]);
  });
});
