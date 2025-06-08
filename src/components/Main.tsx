import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProfileImageBW from '../assets/images/profile_image_bw.jpg';
import ProfileImageColor from '../assets/images/profile_image.jpg';
import '../assets/styles/Main.scss';

function Main({mode}: { mode: string }) {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={mode === 'dark' ? ProfileImageColor : ProfileImageBW} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/KevinKoreth" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kevin-koreth/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Kevin Koreth</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/KevinKoreth" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kevin-koreth/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;