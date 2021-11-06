import logo from './logo.svg';
import InputForm from './components/Form.js'
import './App.css';
//import Button from './components/Button'
import { Component } from 'react';

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
}


