import React from 'react';

const Footer = ()=>{
  return(
    <footer>
      <div className="to-top"><a href="#top">Back to Top</a></div>
      <div className="wrapper">
        <div className="purpose">
          <p className="purpose__content">This website serves as a host for projects made by Richie Black</p>
        </div>

        <div className="contact">
          <p className="contact__content">
            Contact: <br />
            richie@richieblack.me
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
