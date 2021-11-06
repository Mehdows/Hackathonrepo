
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
       <div App={{
        background: '#0000',
        height: "100vh",
         width: "100%",
       }}
      >
        <h1>The Meme Machine</h1>
        <InputForm text='toptext'></InputForm>
        <img 
      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
      alt="new"
      />

        <InputForm text='bottomtext'></InputForm>
        <h3>Share your meme to Twitter! Created during Hackathon hold by Capgemini! KTH could Never </h3>
        <img src="/images/heckling.jpg" alt=""/>
        <TwitterShareButton url={shareUrl} >
           <TwitterIcon size={40}/>
        </TwitterShareButton>
     </div>

    );

  }
}


