<<<<<<< HEAD
=======
import logo from './logo.svg';
import InputForm from './components/Form.js'
>>>>>>> b3d5b63029890f0c55ed00218dd4ad90442fcdb1
import './App.css';
//import Button from './components/Button'
import { Component } from 'react';

<<<<<<< HEAD
import {
  TwitterShareButton,
  TwitterIcon,
} from "react-share";


export default class App extends Component {
  render() {
    const  shareUrl = 'https://www.youtube.com/watch?v=9WzIACv_mxs';
    return (
      <div style={{
         background: '#0000',
        height: "100vh",
         width: "100%",
        }}
      >
        <h3>Share your meme to Twitter! Created during Hackathon hold by Capgemini! KTH could Never </h3>
        <img src="/images/heckling.jpg" alt=""/>
        <TwitterShareButton url={shareUrl} >
           <TwitterIcon size={40}/>
        </TwitterShareButton>
     </div>

    );

  }
=======
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputForm text='toptext'></InputForm>
        <InputForm text='bottomtext'></InputForm>
      </header>
    </div>
  );
>>>>>>> b3d5b63029890f0c55ed00218dd4ad90442fcdb1
}


