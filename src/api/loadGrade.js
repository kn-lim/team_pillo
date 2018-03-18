import delay from './delay';

var members = [
  {
    name: 'Kevin Lim'
  },
  {
    name: 'Ken Truong'
  },
  {
    name: 'Perry Liu'
  }
];

class MemberApi {
  static getMembers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], members));
      }, delay);
    });
  }
}

export default MsgApi;
