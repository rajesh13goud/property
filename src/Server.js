import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
// import Rank from "./components/Rank/Rank";
import Signin from "./components/Signin/Signin";
import ImageLink from "./components/imageLink/imageLink";
import Gas from "./components/imageLink/gas";
import Blockchain from "./components/imageLink/blockchain";
// import { Blockchain } from "./components/imageLink/saveasset";
// import { Blockchain } from "./components/imageLink/saveasset";

const initialState = {
  input: "",
  route: "signin",
  image: "",
  searchfield: "",
  gas: "",
  assetid: [],
  imageIn: null,
  isSignedIn: false,
  isGas: false,
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    entries: 0,
    imageIn: "",
    gasPrice: "",
    eth: "",
    joined: new Date()
  }
};

class Server extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        assetid: data.result,
        email: data.email,
        password: data.password,
        mobile: data.mobile,
        entries: data.entries,
        joined: data.joined
      }
    });
  };
  loadForm = data => {
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
    });
  };
  invoice = data => {
    this.setState({
      assetid: data.assetid
    });
  };

  onRouteChange = route => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    } else if (route === "gas") {
      this.setState({ isGas: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <Logo />
            <ImageLink onRouteChange={this.onRouteChange} />
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Blockchain
            invoice={this.assetid}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}
export default Server;
