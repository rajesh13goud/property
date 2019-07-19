import React from 'react';
// const axios = require('axios');
// const web3 = require('web3');

class Gas extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            'gasprice':'',
            'eth':''
        }
this.componentDidMount = this.componentDidMount.bind(this);

    }
async componentDidMount(){
    const gasPrice = await (await fetch("http://localhost:4000/gas")).json()
      this.setState({gasprice: gasPrice['message']})
      this.setState({eth: gasPrice['txCost']})
      .then(response => {console.log(response.json())})
      this.props.onRouteChange('blockchain');
  
  
//   window.addEventListener('load', async () => {
//     // Modern dapp browsers...
//     if (window.ethereum) {
//         window.web3 = new Web3(ethereum);
//         try {
//             // Request account access if needed
//             await ethereum.enable();
//             // Acccounts now exposed
//             web3.eth.sendTransaction({to: contractAddress, value: web3.utils.toWei("0.00001", "ether"), from: web3.eth.accounts[0], gas: 4700000});
//         } catch (error) {
//             // User denied account access...
//         }
//     }
//     // Legacy dapp browsers...
//     else if (window.web3) {
//         window.web3 = new Web3(web3.currentProvider);
//         // Acccounts always exposed
//         web3.eth.sendTransaction({/* ... */});
//     }
//     // Non-dapp browsers...
//     else {
//         console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
//     }
// })
}
    // onAssetSubmit(e) {
    //     console.log(`here I'm`)
    //     const success = function(result){
    //         console.log(result);
    //         document.getElementById('gasprice').value = result.message;
    //         document.getElementById('eth').value = result.txCost;
    //     }
    //     const url = "http://localhost:4000/gas";
    //     return axios.get(url,success)
    //     .then(response => response.json())
        
    // }
    render(){
    const {onRouteChange} = this.props;
    return(
      <body>
        <section>
                <div className="flex">
                    <div className="form center pa4 br3 shadow-5">
                        <h6 className="my_asset">Cost Info</h6>
                        <form className="auth_form" id="saveAssetzForm" name="saveAssetzForm" >
                            <p className="mt-3">Please check and confirm the rate Details below,</p>
                            <div className="form-group pa4 br3 center">
                              <label>Gas Price</label>
                              <input className="form-control transparent" type="text" value={this.state.gasprice} name="gasprice" placeholder="0.02" onChange={this.componentDidMount} />
                             </div>
                             <div className="form-group pa4 br3 center">
                                 <label>ETH</label>
                                 <input className="form-control" type="text" value={this.state.eth} name="eth" placeholder="0.000002" onChange={this.componentDidMount} />
                             </div>
                             <div className="form-group pa4 br3 center">
                                 <label>Network</label>
                                 <input className="form-control" type="text" id="network" name="network" placeholder="Ethereum Testnet" />
                         <div className="">
                         {/* <button onClick={(e)=>{this.onAssetSubmit(e)}}  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" >
                         Add Asset </button> */}
                      
                         </div> 
                             </div>
                         </form>
                     </div>
                 </div>
         </section>
         <div className="footer">
             <div className="home_container">
                 <button className="start_btn mb-1" id="form" onClick={()=> onRouteChange('blockhain')}>Save To BlockChain</button>
             </div>
         </div>
        <div className="modal show" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
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
     )
    }
 }

export default Gas;
// import React from 'react';
// import axios from 'axios';

// class Gas extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             gasPrice:'',
//             eth: ''
//         }
//     // this.onGasPrice = this.onGasPrice.bind(this);
//     // this.onTrigger = this.onTrigger.bind(this);
//     this.componentDidMount = this.componentDidMount.bind(this);
//     }
// //    async componentDidMount() {
// //        const price = await (await fetch("http://localhost:4000/gas")).json()
// //        this.setState({price})
// //    console.log(price)
// //    console.log({gasPrice:price['message'], eth:price['txCost']})
// //    }
   

// async componentDidMount(){
//   const gasPrice = await (await fetch("http://localhost:4000/gas")).json()
//     this.setState({gasPrice: gasPrice['message']})
//     this.setState({eth: gasPrice['txCost']})
//     // .then(response => response.json())

// }
// //    onEth() {
// //        const target = axios.get("http://localhost:4000/gas").json()
// //             this.setState({eth:target['txCost']})
// //    }

//    render(){
//     // const Gas = ({gasPrice,eth}) => {
//        return(
//            <div className='flex'>
//                 <div className='form center pa4 br3 shadow-5'>
//                     <fieldset id="land_details" className="ba b--transparent ph0 mh0">
//                       <legend className="f1 fw6 ph0 mh0 center">Cost</legend>
//                         <div className="mt3">
//                          <label className="db fw6 lh-copy f6" htmlFor="name">Gas Price</label>
//                          <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                                     type="text"
//                                     value={this.state.gasPrice}
//                                     name="gasPrice"
//                                     placeholder="0000000"
//                                     onChange={this.componentDidMount}
//                                      />
//                         </div>
//                         <div className="mt3">
//                                 <label className="db fw6 lh-copy f6" htmlFor="land-address">Eth Cost</label>
//                                 <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                                     type="text"
//                                     value={this.state.eth}
//                                     name="eth"
//                                     onChange={this.componentDidMount}
//                                      />
//                         </div>
//                     </fieldset>
//                 </div>

//            </div>


//        )
//    }

// }
// export default Gas;