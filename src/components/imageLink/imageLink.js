import React from 'react';
//import { file } from '@babel/types';
//const axios = require("axios");
//import { binaryExpression } from '@babel/types';
//import './imageLink.css';
//import multer from 'multer';
//var upload = multer();

class ImageLink extends React.Component {
    constructor() {
        super();
        this.state = {
            imageIn: null
        }
        // this.onFormSubmit = this.onFormSubmit.bind(this);
        // this.onChange = this.onChange.bind(this)
    };
    
onImageChange= (e) => {
  this.setState({imageIn: e.target.files[0]})
}

// onFormSubmit(e) {
//     e.preventDefault();
//          const formData = new FormData();
//          formData.append('myImage',this.state.imageIn);
//          fetch('http://localhost:3001/sendImage', {
//              method: 'post',
//              headers: {'Content-Type': 'multipart/form-data'},
//              body: formData
//          })
// }
  
onButtonSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage',this.state.imageIn);
    fetch('http://localhost:3001/sendImage', {
            method: 'post',
            headers: {'Content-Type': 'application/x-www-urlencoded'},
            body: formData
            
        })
            .then(response => {
                    alert("The file is successfully uploaded");
                }).catch((error) => {
                })
        //     .then(user => {
        //         if(user.files){
        //             this.props.loadUser(user);
        //             this.props.onRouteChange('home');
        //     }
        // })    
      }
  // this.setState({imageIn: this.state.input});
      // (this.state.input)
      //   .then(response => {
      //     if(response){
      //       fetch('http://localhost:3001/sendImage', {
      //         method: 'post',
      //         headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      //         body: FormData({
      //           file : this.state.imageIn
      //         })
      //       })
      //       .then(response => response.json())
      //     }
      //   })
      //   .catch(err => console.log(err));
      // }

    render (){
// const {onButtonSubmit} = this.props;
        return(
        <div>
            <p className= 'orange f3'>
                {'Add your property'}
            </p>
            <div className= 'flex'>
                <div className= 'form center pa4 br3 shadow-5'>
                   <input className= 'f4 pa2 w-70 center' type= 'file' name= 'myImage' onChange = {this.onImageChange}/>
                   {/* <img id= 'inputimage' alt = '' src = {image} /> */}
                   <button className= 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                   onClick = {this.onButtonSubmit}
                   >Add</button>
                </div>
            </div>
        </div>
        )
        
    }
}
// class ImageLink extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state ={
//             file: null
//         };
//         this.onFormSubmit = this.onFormSubmit.bind(this);
//         this.onChange = this.onChange.bind(this);
//     }
//     onFormSubmit(e){
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('myImage',this.state.file);
//         fetch('http://localhost:3001/sendImage')
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data'
//             }
//         };
//         axios.post("/sendImage",formData,config)
//             .then((response) => {
//                 alert("The file is successfully uploaded");
//             }).catch((error) => {
//         });
//     }
//     onChange(e) {
//         this.setState({file:e.target.files[0]});
//     }

//     render() {
//         return (
//             <form onSubmit={this.onFormSubmit}>
//                 <h1>File Upload</h1>
//                 <input type="file" name="myImage" onChange= {this.onChange} />
//                 <button type="submit">Upload</button>
//             </form>
//         )
//     }
// }

export default ImageLink;






// import React from 'react';
// import { render } from 'react-dom';
// import { observer } from 'mobx-react';
// import ImgUpload from './ImageUpload';

// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };


// const App = observer(() => (
//   <div style={styles}>
//     <h2>Graceful Image Upload Preview {'\u2728'}</h2>
//     <ImgUpload />
//   </div>
// ));

// render(<App />, document.getElementById('root'));
