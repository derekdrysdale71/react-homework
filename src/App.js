import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InputProvider from './components/InputProvider';
import NavBar from './components/NavBar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import UserView from './components/UserView';
import ReusableComponent from './components/ReusableComponent';

class App extends Component {
  state = {
    value1: '',
    value2: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/option1" component={AboutView} />
            <InputProvider>
              <Route
                exact
                path="/option2"
                render={props => (
                  <UserView
                    {...props}
                    {...this.state}
                    action={this.handleChange}
                  />
                )}
              />
            </InputProvider>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
