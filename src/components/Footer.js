/**
    * @description      : 
    * @author           : Christien Moses
    * @group            : 
    * @created          : 20/05/2024 - 10:59:47
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/05/2024
    * - Author          : Christien Moses
    * - Modification    : 
**/
import React from 'react';
import { FaFacebook, FaTelegram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex justify-center space-x-4 p-4 bg-gray-800 text-white">
      <a href="https://www.facebook.com/christien.moses" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl" />
      </a>
      <a href="https://telegram.org/christien.Moses" target="_blank" rel="noopener noreferrer">
        <FaTelegram className="text-2xl" />
      </a>
      <a href="https://www.linkedin.com/mwlite/feed/?trk=p_mwlite_feed_updates-primary_nav" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;
