import reducer from '../../reducers/usernameReducer';
import * as types from '../../constants/action-types';
describe('usernameReducer', () => {
  it('should handle SET_USERNAME', () => {
    expect(reducer("I'm Tester", types.SET_USERNAME)).toEqual("I'm Tester");
  });
});
