import logo from '../../assets/photo/tojiev.png';
import { Button } from '@mui/material';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

import './style.css';

const MainPage = () => {
  return (
      <div className="main-content">
        <div className="photo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="info">
          <div className="name">
            <h1>SHUXRAT TOJIEV</h1>
            <h3>Software Developer</h3>
          </div>
          <div className="icons">
            <SocialIcon bgColor="rgb(20, 26, 26)" className="socialIcon" url="https://www.linkedin.com/in/shukhrat-tojiev/" target="_blank" rel="noopener noreferrer"/>
            <SocialIcon bgColor="rgb(20, 26, 26)" className="socialIcon" url="https://www.youtube.com/channel/UCDSkmFig16oYXWNmbOfWQhA" target="_blank" rel="noopener noreferrer"/>
            <SocialIcon bgColor="rgb(20, 26, 26)" className="socialIcon" url="https://twitter.com" target="_blank" rel="noopener noreferrer"/>
            <SocialIcon bgColor="rgb(20, 26, 26)" className="socialIcon" url="https://github.com/shukhratojiev" target="_blank" rel="noopener noreferrer"/>
          </div>
          <div className="btn">
            <Link to="/about">
              <Button><h2>About me</h2></Button>
            </Link>
          </div>        
        </div>
      </div>
  );
}
 
export default MainPage;