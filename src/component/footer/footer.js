import React from 'react';
import './footer.css';

const Footer = props => {
  return(
    <div className="footer">
      <div className="max-width">
        <div className="credit">
          API : <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">CoinMarketCap</a>
        </div>
        <div className="contact">
          /**<a href="https://github.com/sksarath" target="_blank" rel="noopener noreferrer">
              <img src={require("../../img/github.svg")} alt="Github"/>
          </a>**/
          
        </div>
      </div>
    </div>
  )
}

export default Footer;
