import React, { Component } from 'react';

// Routes
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Home
import SplashPage from './components/home/SplashPage';

// new_user
import ForgotPasswordPage from './components/new_user/ForgotPasswordPage';
import LoginPage from './components/new_user/LoginPage';
import RegisterPage from './components/new_user/RegisterPage';

// student
import AddClassPage from './components/student/AddClassPage';
import StuClassPage from './components/student/StuClassPage';
import StuHomePage from './components/student/StuHomePage';

// instructor
import CreateAssignmentPage from './components/instructor/CreateAssignmentPage';
import CreateClassPage from './components/instructor/CreateClassPage';
import InstrClassListPage from './components/instructor/InstrClassListPage';
import InstrClassPage from './components/instructor/InstrClassPage';
import InstrHomePage from './components/instructor/InstrHomePage';

// common
import ForumPage from './components/common/ForumPage';
import GradesPage from './components/common/GradesPage';
import GroupPage from './components/common/GroupPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* home */}
          <Route exact path="/" component={ SplashPage }/>

          {/* new_user */}
          <Route path="/forgot_password" component={ ForgotPasswordPage }/>
          <Route path="/login" component={ LoginPage }/>
          <Route path="/register" component={ RegisterPage }/>

          {/* student */}
          <Route path="/add_class" component={ AddClassPage }/>
          <Route path="/stu_class" component={ StuClassPage }/>
          <Route path="/student" component={ StuHomePage }/>

          {/* instructor */}
          <Route path="/create_assignment" component={ CreateAssignmentPage }/>
          <Route path="/create_class" component={ CreateClassPage }/>
          <Route path="/instr_class_list" component={ InstrClassListPage }/>
          <Route path="/instr_class" component={ InstrClassPage }/>
          <Route path="/instructor" component={ InstrHomePage }/>

          {/* common */}
          <Route path="/forum" component={ ForumPage }/>
          <Route path="/grades" component={ GradesPage }/>
          <Route path="/group" component={ GroupPage }/>
        </div>
      </Router>
    );
  }
}

export default App;