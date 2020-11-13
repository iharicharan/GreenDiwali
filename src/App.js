import React from 'react';
import{FacebookShareButton,WhatsappShareButton,TwitterShareButton,FacebookIcon,WhatsappIcon,TwitterIcon} from 'react-share'
import './App.scss'
import ReactAudioPlayer from 'react-audio-player'; 
import audio from './videos/ram.mp3' 
function App(){
    return(
    <div className="App-Full-box">
    <center>
    <p id="time"></p>
        <h2>Wish you a Happy Diwali!</h2>
        <div>
      <a href='https://www.twitter.com/iharicharan' className='twitter-icon'><i className='fa fa-twitter'>Follow @HariCharan</i></a>
        </div>
        <ReactAudioPlayer src={audio} autoPlay loop/>
          
        <p className='share-buttons1'>Share On</p> 
     <div className='share-buttons'> 
<FacebookShareButton url="https://diwali-wishes1.web.app" quote="“Let This Diwali Burn All Your Bad Times, Celebrate An Eco-Friendly Diwali!” “Let Us Have A Smoke Free And Breathe Free Diwali.” “Lets Fill Our Homes With Prayers & Light Not With Fumes & Crackers.👇" className='icon'>
     <FacebookIcon size={40} square='true'/>
</FacebookShareButton>
<WhatsappShareButton url="*“Let This Diwali Burn All Your Bad Times, Celebrate An Eco-Friendly Diwali!” “Let Us Have A Smoke Free And Breathe Free Diwali.” “Lets Fill Our Homes With Prayers & Light Not With Fumes & Crackers.*.👇 https://diwali-wishes1.web.app" className='icon' >
<WhatsappIcon size={40} square='true'/>
</WhatsappShareButton>
<TwitterShareButton url="“Let This Diwali Burn All Your Bad Times, Celebrate An Eco-Friendly Diwali!” “Let Us Have A Smoke Free And Breathe Free Diwali.” “Lets Fill Our Homes With Prayers & Light Not With Fumes & Crackers..👇 https://diwali-wishes1.web.app"  className='icon'>
<TwitterIcon size={40} square='true'/>
</TwitterShareButton>

</div>

<h3 id='flex-grid'>“Let This Diwali Burn All Your Bad Times, Celebrate An Eco-Friendly Diwali!” “Let Us Have A Smoke Free And Breathe Free Diwali.” “Lets Fill Our Homes With Prayers & Light Not With Fumes & Crackers.</h3>
       
</center>
  </div>
  );
}
export default App

