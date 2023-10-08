import React from 'react';
import { FaEnvelope, FaPhone, FaAddressBook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import icons
import './Footer.css';

function Footer() {
  const phoneNumber = '+8533049045'; // Replace with your phone number
  const email = 'ritikasharma20032003@gmail.com'; // Replace with your email address
  const instagramLink = 'https://www.instagram.com/ritika_sharma_133/'; // Replace with your Instagram link
  const whatsappLink = 'https://wa.me/8533049045'; 
  // Replace with your WhatsApp link

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href={`mailto:${email}`}>
                  <FaEnvelope className="fa-icon" /> Email
                </a>
              </li>
            
              <li>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="fa-icon" /> Instagram
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="fa-icon" /> WhatsApp
                </a>
              </li>
             
            </ul>
          </div>
          {/* Add other sections and links here */}
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} IMDb Clone</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
