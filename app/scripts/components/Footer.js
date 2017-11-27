import React, { Component } from 'react';
import { Link } from 'react-router';
import 'styles/footer.less';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Link className="logo" to="/">
          <h1>
            <span className="sr-only">Real Men Survive</span>
          </h1>
        </Link>

        <div className="social-links">
          <a className="instagram-icon" href="https://instagram.com/realmensurvive/">Instagram</a>
          <a className="facebook" href="https://www.facebook.com/realmensurvive.shop">Facebook</a>
          <a className="twitter" href="https://twitter.com/realmensurvive">Twitter</a>
        </div>

        <div className="footer__links">
          <Link to="/about">About</Link>
          <a href="mailto:chiplay@gmail.com">Contact Me</a>
          <Link to="/explore/posts">Archives</Link>
          <Link to="/explore/products">Products</Link>
        </div>

        {/* <div className="email-signup">
          <form action="//laybabylay.us3.list-manage.com/subscribe/post?u=fdeae0ed89c10e09597447b4b&amp;id=30ae3cf548" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate="">
            <label htmlFor="mce-EMAIL">Weekly Inbox Inspiration:</label>
            <div className="field-wrapper">
              <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required="" />
              <div style={{ position: 'absolute', left: '-5000px' }}>
                <input type="text" name="b_fdeae0ed89c10e09597447b4b_30ae3cf548" tabIndex="-1" value="" />
              </div>
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
            </div>
          </form>
        </div> */}

        <div className="footer-legal">
          <small>Copyright Real Men Survive</small>
        </div>
      </footer>
    );
  }
}
