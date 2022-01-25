import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import video from './assets/video/appbg.mp4'

ReactDOM.render(
  <React.StrictMode>
    <div className="video-wrapper">
      <video playsInline autoPlay muted loop>
        <source src={video} type="video/mp4"/>
          Your browser does not support the video.
      </video>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
