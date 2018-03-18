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

  static saveMember(members) {
    members = Object.assign({}, members); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //Just simulating creation here.
        //The server would generate ids for new authors in a real app.
        //Cloning so copy returned is passed by value rather than by reference.
        members.push(members);

        resolve(members);
      }, delay);
    });
  }

  static deleteMembers(members) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfMembersToDelete = members.findIndex(members => {
          return members == members;
        });
        members.splice(indexOfMembersToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default MembersApi;
