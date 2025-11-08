import React from 'react';

const ContactIconLink = ({ Icon, url, className }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={className} 
    >
      <Icon size={30} />
    </a>
  );
};

export default ContactIconLink;