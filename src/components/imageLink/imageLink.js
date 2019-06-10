import React from 'react';
//import  ipfs from './ipfs';
import axios from 'axios';
 class ImageLink extends React.Component {

    constructor(props) {
         super(props);
        this.state = {
            ipfsHash:'',
            data:null
        }
        
        this.onButtonSubmit = this.onButtonSubmit.bind(this);        
        this.onImageChange = this.onImageChange.bind(this)
    }  

onImageChange(e)  {
    console.log('capture file...')
    e.preventDefault()
    const file = e.target.files[0]
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      this.setState({ data: Buffer(reader.result) })
      console.log('buffer', this.state.data)
    }
  }

onButtonSubmit(e)  {
    e.preventDefault()
    console.log('on submit..')
    
        const formData = new FormData();
        var file = document.querySelector('#file');
        formData.append('buffer', file.files[0])
        const config = {     
            headers: { 'Content-Type': 'multipart/form-data' }
        }
       const url = "http://localhost:3001/sendImage";
       console.warn('formdata', formData)
       return axios.put(url, formData, config)
       .then(res => console.log("result", res))
       .then(files => {
             this.setState({data: files[0].hash});
                console.log(files.statusText)               
        })
        .then(user => {
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        }) 
    }
    render ()
    {
        return(
        <div>
            <p className= 'light blue f3'>
                {'Add your property'}
            </p>
            <div className= 'flex'>
                <div className= 'form center pa4 br3 shadow-5'>
                   <input className= 'f4 pa2 w-70 center' id="file" type= 'file' name= 'file' onChange={(e) =>this.onImageChange(e)} />
                   
                   {/* <img src={`https://gateway.ipfs.io/ipfs/${this.state.data}`} alt=""/> */}
                   <button className= 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                   onClick = {(e) => this.onButtonSubmit(e)}
                   >Add</button>
                </div>
            </div>
        </div>
        )
    }
}

export default ImageLink;