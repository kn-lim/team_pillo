import delay from './delay';

var msg = [
  {
    title: 'PA3',
    date: 'Feb. 18, 2018',
    msg:
      "Add in the JavaScript to make your page interactive to user's events such as button-clicks (add, remove, update,etc.). You do not need to store any data on the server. You can use user's data to simulate event handling."
  }
];

class MsgApi {
  static getMsg() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], msg));
      }, delay);
    });
  }
}

export default MsgApi;
