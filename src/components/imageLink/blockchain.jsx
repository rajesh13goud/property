import React from "react";
import { Nav } from "react-bootstrap";
// import {ImageLink} from './imageLink';
class BlockChain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockHash: "",
      blockNumber: "",
      contractAddress: "",
      gasUsed: "",
      trxUsed: "",
      ref: "",
      asset_id: ""
    };
    // setTimeout(
    //     function() {
    //         this.componentDidMount = this.componentDidMount.bind(this);
    //     },
    //     60000
    // );
    this.componentDidMount = this.componentDidMount.bind(this);
    // let assetid = window.location.pathname.split('/')[2];
    // console.log('asseytid' + assetid);
    // this.setState({assetid: this.props.assetid})
  }

  // async componentDidMount(){
  //     const form = await (await fetch("http://localhost:4000/addBlockchain/:assetid")).json()
  //     this.setState({blockHash: form['blockHash']})
  //     this.setState({blockNumber:form['blockNumber']})
  //     this.setState({contractAddress:form['contract']})
  //     this.setState({gasUsed: form['gasUsed']})
  //     this.setState({trxUsed: form['transactionHash']})
  //     .then(response => response.json())
  //     this.props.onRouteChange('signin');
  // }

  // onSaveBC = (e) => {
  //     e.preventDefault()

  async componentDidMount() {
    // this.setState({assetid: form.assetid})
    // let assetid = this.props.assetid;
    let assetid = "28635017-b102-42eb-a3ea-90354e491879";
    // let assetid = window.location.pathname.split("/")[3];
    console.log("assetinbc", assetid);
    // let assetid = [ImageLink['asset_id']]
    // console.log(window.location.pathname.split("/")[2]);
    // console.log("asset in FEblock", this.props.assetid);

    const form = await (await fetch(
      "http://localhost:4000/addBlockchain/" + assetid
    )).json();
    this.setState({ blockHash: form["blockhash"] });
    this.setState({ blockNumber: form["blocknumber"] });
    this.setState({ contractAddress: form["contract"] });
    this.setState({ gasUsed: form["gasused"] });
    this.setState({ trxUsed: form["trxused"] });
    this.setState({
      ref: `https://ropsten.etherscan.io/tx/${this.state.trxUsed}`
    }).then(response => response.json());
    // console.log('asseytid' + assetid);
    // var ref = `https://ropsten.etherscan.io/tx/${this.state.trxUsed}`
    // document.getElementById('etherscan').innerHTML = ref;
    // document.getElementById('etherscan').setAttribute('href', ref);
    this.props.onRouteChange("signin");
  }

  // }
  render(props) {
    // console.log('props', this.props);

    return (
      <body>
        <section>
          <div className="flex">
            <div className="flex">
              <div className="form center pa4 br3 shadow-5">
                <fieldset
                  id="land_details"
                  className="ba b--transparent ph0 mh0"
                >
                  <legend className="f1 fw6 ph0 mh0 center">
                    Land Details
                  </legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="block-hash">
                      Block Hash
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      value={this.state.blockHash}
                      name="block-hash"
                      onChange={this.componentDidMount}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="block-number">
                      Block Number{" "}
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="number"
                      value={this.state.blockNumber}
                      name="block-number"
                      onChange={this.componentDidMount}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="address">
                      Contract Address
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      value={this.state.contractAddress}
                      name="address"
                      id="address"
                      onChange={this.componentDidMount}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="number">
                      Gas Used
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="number"
                      value={this.state.gasUsed}
                      name="price"
                      id="price"
                      onChange={this.componentDidMount}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="number">
                      Transaction USed
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      value={this.state.trxUsed}
                      name="price"
                      id="price"
                      onChange={this.componentDidMount}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="number">
                      Ether Scan{" "}
                    </label>
                    <Nav.Link
                      className="logo"
                      href={`https://ropsten.etherscan.io/tx/${
                        this.state.trxUsed
                      }`}
                    >
                      Transaction
                    </Nav.Link>
                    {/* <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    value={`https://ropsten.etherscan.io/tx/${this.state.trxUsed}`} /> */}
                  </div>
                  {/* <input className='f4 pa2 w-70 center'  id="file" type='file' name='file' onChange={(e) => this.onImageChange(e)} /> */}
                  {/* <img src={`https://gateway.ipfs.io/ipfs/${this.state.data}`} alt=""/> */}
                  <button
                    className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                    onClick={e => {
                      this.componentDidMount(e);
                    }}
                  >
                    Go to Home
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
        </section>
      </body>
    );
  }
}
export default BlockChain;
