import React from 'react';
import { FaTelegram, FaTwitter} from 'react-icons/fa';
import { FaMeta} from 'react-icons/fa6'
import '../index.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <footer className='footer'>
        <div className="social-icons">
        <a href="https://twitter.com/BeastInu_ETH" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://t.me/Beast_Inu_Eth" target="_blank" rel="noreferrer"><FaTelegram /></a>
          <a href="https://www.threads.net/@beast_inu" target="_blank" rel="noreferrer"><FaMeta /></a>
        </div>
        <div className="copyright">
          &copy; Beast Inu {year}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
