import React, { Component } from 'react';
import { Link } from 'react-router';
import 'styles/author.less';

export default class Author extends Component {
  render() {
    return (
      <div className="author">
        <Link className="headshot" to="/about" title="About Real Men Survive">About RMS</Link>

        <div className="social-links">
          <a className="facebook" href="https://www.facebook.com/realmensurvive.shop" target="_blank">Facebook</a>
          <a className="instagram-icon" href="http://instagram.com/realmensurvive/" target="_blank">Instagram</a>
          <a className="twitter" href="https://twitter.com/realmensurvive" target="_blank">Twitter</a>
        </div>

      </div>
    );
  }
}
