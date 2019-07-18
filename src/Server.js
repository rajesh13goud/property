import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Navigation from './components/Navigation/Navigation';
// import Signin from './components/Signin/Signin';
// import Register from './components/Register/Register';
// import Logo from './components/Logo/Logo';
// import Rank from './components/Rank/Rank';
// import Gas from './components/imageLink/gas';
// import Res from './components/imageLink/raect';
// import ErrorBoundry from './components/Navigation/ErrorBoundry';
import SignupModal from './components/Grid/SignUpModal';
import MainNav from './components/Grid/NavBar';
import LoginModal from './components/Grid/LoginModal';
// // import Form from './components/Menu/form';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
// import Scroll from './components/Logo/Scroll';
// import ImageLink from './components/imageLink/imageLink';
// import NavBar from './components/NavBar/NavBar';
// import Menu from './components/Menu/menu';
// import {MegaMenu} from 'primereact/megamenu';
// import PropTypes from 'prop-types';

// import ipfs from './components/imageLink/ipfs';
// import Index from './components/Index/index';
//import multer from 'multer';A

import './App.css';
// import BlockChain from './components/imageLink/blockchain';
// import ImageLink from './components/imageLink/imageLink';
//var upload = multer();

const initialState = {
  input: '',
  route: 'signin',
  image: '',
  searchfield: '',
  gas: '',
  imageIn: null,
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    mobile: '',
    entries: 0,
    imageIn: '',
    gasPrice: '',
    eth: '',
    joined: new Date()
  },
  // asset: {
  //   id:'',
  //   ownername:'',
  //   location:'',
  //   address:'',
  //   price:'',
  //   entered:new Date()
  // }

}

class Server extends Component {
  constructor() {
    super();
    this.state =  {
      showLogin: false,
      showSignup: false
    }
  }
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        state: '',
        email: data.email,
        password: data.password,
        mobile: data.mobile,
        entries: data.entries,
        joined: data.joined
      }
    })
  }
  loadForm = (data) => {
    this.setState({
      user: {
        id: data.id,
        ownername: data.ownername,
        location: data.location,
        address: data.address,
        price: data.price,
        // propertyname: data.propertyname,
        // mobile: data.mobile,
        // price: data.price,
        // landetails: data.landetails,
        entered: data.joined
      }
    })
  }
  // async componentDidMount() {
  //       const target = await (await fetch('http://localhost:4000/gas')).json()
  //       this.setState({target})
  //   }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });
  }
  componentDidUpdate(nextProps, nextState) {
    if (this.props.userId != nextProps.userId) {
      this.setState({ showLogin: false, showSignup: false, showSell: false });
    }
  }
  // render(){
  //   const {gas} = this.state;
  //   if(gas){
  //     return <h1>Loading...</h1>
  //   } else {
  //   return(
  //     function Notification({ text, state }) {
  //       switch(state) {
  //         case 'info':
  //           return <Info text={text} />;
  //         case 'warning':
  //           return <Warning text={text} />;
  //         case 'error':
  //           return <Error text={text} />;
  //         default:
  //           return null;
  //       }
  //     }
  //   )}

  //     Notification.propTypes = {
  //        text: React.PropTypes.string,
  //        state: React.PropTypes.oneOf(['info', 'warning', 'error'])
  //     }
  //   }
  // }    // <div className= "App">
  //       // <Navigation />
  // {/* {this.state.route === 'signin'
  // ? <ErrorBoundry>
  //     <ImageLink onRouteChange = {this.onRouteChange} />  
  //   </ErrorBoundry>
  // :<Gas />
  // }
  // {this.state.route === 'blockchain'
  // ? <Gas onRouteChange ={this.onRouteChange} />
  // :<BlockChain /> 
  // } */}

  // </div>
  // )


  render() {
    // const { isSignedIn, route } = this.props;

    return (
      <div>
        <MainNav onLoginClicked={() => this.setState({ showLogin: true })}
          onSignupClicked={() => this.setState({ showSignup: true })}
          userId={this.props.userId}
          onLogoutClicked={this.props.logout} />

        <LoginModal showLogin={this.state.showLogin}
          onClose={() => this.setState({ showLogin: false })}
          onLoginClicked={(address, password) => this.props.login(address, password)} />
        <SignupModal showSignup={this.state.showSignup}
          onClose={() => this.setState({ showSignup: false })}
          onsignupClicked={(password) => this.props.signup(password)} />
      </div>
//       <div className="App">
//         <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
//         {route === 'home' ?
//           <ImageLink />
//           : (
//             <BlockChain />
//           )
//         }

//         {/* <div>
//           {(()=> {
//             switch(route) {
//               case 'home':
//               return<ImageLink onRouteChange={this.onRouteChange} />
//               case 'signin':
//               return <Gas />
//               case 'blockchain':
//               return <BlockChain />
//               default:
//               return <Signin loadUser= {this.loadUser} onRouteChange={this.onRouteChange} />;
//             }
//           })()}
//         </div> */}
//       </div>
    );
  }
}

// onRouteChange = (route) => {
//   if (route === 'signout') {
//     this.setState(initialState)
//   } else if (route === 'home') {
//     this.setState({isSignedIn: true})
//   } 
//   this.setState({route: route});
// }
// onSearchChange=(event) => {
//   this.setState({searchfield: event.target.value})
// }
// // onInputChange = (image) => {
// //   this.setState({input: image.target.value});
// // }
// // onImageSubmit = () =>{
// //   if(this.state.isSignedIn){
// //   this.setState({image: this.state.input});
// //   fetch('http://localhost:3001/image', {
// //     method: 'put',
// //     headers: {'Content-Type': 'application/json'},
// //     body: JSON.stringify({
// //       id: this.state.user.id
// //     })
// //   })
// //     .then(response => response.json())
// //     .then(count => {
// //       this.setState(Object.assign(this.state.user, {entries: count})
// //       )
// //     })
// //   }
// // }
// // onImageChange = (imageIn) => {
// //   this.setState({input: imageIn.target.value});
// // }

// render() {
//    const { isSignedIn, route} = this.state;
//   return (

//     <div className="App">
//       <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
//        <Router>
//        <Link to={"/gas"}>get gas price</Link>
//        <div className="App">
//        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
//          <header className="tc dib br3 pa3 ma2 grow bw2 shadow-5" >
//            <nav className="toolbar__navigation" style = {{display: 'flex', justifyContent: 'flex'}}>
//          <Navbar >
//            <Nav.Link className="logo" href="https://heptagon.in/about">Heptagon</Nav.Link>
//            <Nav className="mr-auto">
//              <Link to={"/home" }>Home</Link>
//              <Link to={"/buyer" }>BUYER</Link>
//              <Link to={"/seller" }>SELLER</Link>
//            </Nav> 
//            <Link to={"/signin"}>Sign in</Link>
//            <Form inline >
//              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//              <Button variant="outline-light" >Search</Button>
//            </Form>
//          </Navbar>
//            </nav>
//          </header>
//          <Route path="/signin" Component={Signin} loadUser= {this.loadUser} onRouteChange={this.onRouteChange} />
//          <Route path="/signout" component={Register} loadUser= {this.loadUser} onRouteChange={this.onRouteChange} />
//          <Route path="/home" component={Logo} />
//          <Route path="/home" component={Rank} name={this.state.user.name} entries={this.state.user.entries} />
//         <Route path="/buyer" component={ImageLink} />
//         <Route path="/gas" Component={Gas} />
//     // </div>
//       </Router>

//       </div>
// //   );
// )}};
// //       { route === 'home' ?
// //           <div>
// //             <Logo />
// //             {/* <NavBar /> */}
// //             {/* <Menu searchChange= {this.onSearchChange}/> */}
// //             <Rank name={this.state.user.name} entries={this.state.user.entries} />
// //             {/* <Index />      */}
// //             <ImageLink />
// //             {/* <Form loadForm={this.loadForm} /> */}
// //           </div>
// //            :(
// //             route ==='signin' 
// //               ? <Signin loadUser= {this.loadUser} onRouteChange={this.onRouteChange} />
// //               : <Register loadUser= {this.loadUser} onRouteChange={this.onRouteChange}/>
// //             )
// //       }     

//   // return(
//   //   <Router>
//   //     <div className= "App">
//   //       <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
//   //      { route === 'home' ?
//   //       <div>
//   //         <Logo />
//   //         <header className="tc dib br3 pa3 ma2 grow bw2 shadow-5" >
//   //           <nav className="toolbar__navigation" style = {{display: 'flex', justifyContent: 'flex'}}>
//   //         <Navbar >
//   //           <Link className="logo" href="https://heptagon.in/about">Heptagon</Link>
//   //           <Nav className="mr-auto">
//   //             <Link to="/">Home</Link>
//   //             <Link to="/buyer" >BUYER</Link>
//   //             <Link to="/seller" s>SELLER</Link>
//   //           </Nav> 
//   //           <Form inline >
//   //             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//   //             <Button variant="outline-light" >Search</Button>
//   //           </Form>
//   //         </Navbar>
//   //           </nav>
//   //           {/* <Route path="/buyer" component={ImageLink} /> */}
//   //         </header>
//   //         <Route path="/" exact component={Navigation} />
//   //         <Route path="/seller" exact component={ImageLink} />
//   //         <Rank name={this.state.user.name} entries={this.state.user.entries} />
//   //         </div>
//   //         :(
//   //           route ==='signin' 
//   //           ? <Signin loadUser= {this.loadUser} onRouteChange={this.onRouteChange} />
//   //           : <Register loadUser= {this.loadUser} onRouteChange={this.onRouteChange}/>
//   //         )
//   //       }

//   //       {/* <Route path="/buyer" exact component={Menu} /> */}
//   //     </div>
//   //   </Router>



export default Server;