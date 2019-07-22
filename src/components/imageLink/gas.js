import React from "react";
// const axios = require('axios');
// const web3 = require('web3');

class Gas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gasprice: "",
      eth: ""
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  async componentDidMount(e) {
    const gasPrice = await (await fetch("http://localhost:4000/gas")).json()
    this.setState({ gasprice: gasPrice["message"] })
    this.setState({ eth: gasPrice["txCost"] })
    this.props.onRouteChange("blockchain");
  }

  render() {
    // const { onRouteChange } = this.props;
    return (
      <body>
        <section>
          <div className="flex">
            <div className="form center pa4 br3 shadow-5">
              <h6 className="my_asset">Cost Info</h6>
              <form
                className="auth_form"
                id="saveAssetzForm"
                name="saveAssetzForm"
              >
                <p className="mt-3">
                  Please check and confirm the rate Details below,
                </p>
                <div className="form-group pa4 br3 center">
                  <label>Gas Price</label>
                  <input
                    className="form-control transparent"
                    type="text"
                    value={this.state.gasprice}
                    name="gasprice"
                    placeholder="0.02"
                    onChange={this.componentDidMount}
                  />
                </div>
                <div className="form-group pa4 br3 center">
                  <label>ETH</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.eth}
                    name="eth"
                    placeholder="0.000002"
                    onChange={this.componentDidMount}
                  />
                </div>
                <div className="form-group pa4 br3 center">
                  <label>Network</label>
                  <input
                    className="form-control"
                    type="text"
                    id="network"
                    name="network"
                    placeholder="Ethereum Testnet"
                  />
                  <div className="">
                    {/* <button onClick={this.onAssetSubmit}  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" >
                         Add Asset </button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className="footer">
          <div className="home_container">
            <button
              className="start_btn mb-1"
              id="form"
              onClick={this.componentDidMount}
            >
              Save To BlockChain
            </button>
          </div>
        </div>
        <div
          className="modal show"
          id="myModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-body">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mb-1">Saving permanently to ethreum blockchain</p>
              <small>Please do not exit the app</small>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default Gas;
