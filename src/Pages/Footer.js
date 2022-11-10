import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/hatusalbertassi/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/albertassihatus"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
