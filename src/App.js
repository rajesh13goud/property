import React, { Component } from "react";
import Navigation from './components/Navigation/Navigation';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = this.state = {
      showLogin: false,
      showSignup: false,
      showSell: false
    };
  }
  componentDidUpdate(nextProps, nextState) {
    if (this.props.userId !== nextProps.userId) {
      this.setState({ showLogin: false, showSignup: false, showSell: false });
    }
  }

  render() {  
    const {isSignedIn} = this.state;  
    return (
      <div>
        <Navigation isSignedIn={isSignedIn} />
      </div>
    );
  }
}

export default App; 
