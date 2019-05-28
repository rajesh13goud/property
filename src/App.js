import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLink from './components/imageLink/imageLink';
//import multer from 'multer';

import './App.css';
//var upload = multer();


const initialState = {
  input: '',
  route: 'signin',
  image: '',
  imageIn: '',
  isSignedIn: false,
  user: {
        id: '',
        name: '',
        email: '',
        password: '',
        mobile: '',
        entries: 0,
        joined: new Date()
  },
  
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  } 
  loadUser = (data) => {
    this.setState({user:  {
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            mobile: data.mobile,
            entries: data.entries,
            joined: data.joined
    }})
  }
    onRouteChange = (route) => {
      if (route === 'signout') {
        this.setState(initialState)
      } else if (route === 'home') {
        this.setState({isSignedIn: true})
      }
      this.setState({route: route});
    }
    onInputChange = (image) => {
      this.setState({input: image.target.value});
    }
    onButtonSubmit = () =>{
      this.setState({imageIn: this.state.input});
      
    }
    onImageChange = (imageIn) => {
      this.setState({input: imageIn.target.value});
    }

   
    
    
    render() {
      const { isSignedIn, route} = this.state;
      return (
        <div className="App">
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
          { route === 'home' ?
              <div>
                <Logo />                
                <ImageLink onImageChange = {this.state.onImageChange}  onButtonSubmit = {this.state.onButtonSubmit} />
                <Rank name={this.state.user.name} entries={this.state.user.entries} />
              </div>
              : (
                route ==='signin' 
                  ? <Signin loadUser= {this.loadUser} onRouteChange={this.onRouteChange}/>
                  : <Register loadUser= {this.loadUser} onRouteChange={this.onRouteChange}/>
                )
          }
          
        </div>
        
      );
    };
          
  
}

export default App;

