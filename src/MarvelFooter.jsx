import './MarvelFooter.scss';

export default function MarvelFooter() {
  return (
    <footer className="marvel-footer-redesign">
      <div className="footer-top">
        <div className="footer-logo-center">
          <img src="/marvel-logo.png" alt="Marvel Logo" />
        </div>
        <div className="footer-columns">
          <div className="footer-col">
            <div className="footer-col-title">ABOUT MARVEL</div>
            <div className="footer-col-link">HELP/FAQS</div>
            <div className="footer-col-link">INTERNSHIPS</div>
            <div className="footer-col-link">CAREERS</div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">ADVERTISING</div>
            <div className="footer-col-link">DISNEY+</div>
            <div className="footer-col-link">MARVELHQ.COM</div>
            <div className="footer-col-link">REDEEM DIGITAL COMICS</div>
          </div>
          <div className="footer-col footer-col-insider">
            <div className="footer-col-title">MARVEL INSIDER</div>
            <div className="footer-insider-logo-desc">
              <img src="/unnamed-removebg.png" alt="Insider Logo" className="footer-insider-logo" />
              <span>Get rewarded for being a Marvel fan</span>
            </div>
          </div>
          <div className="footer-col footer-col-unlimited">
            <div className="footer-col-title">MARVEL UNLIMITED</div>
            <div className="footer-unlimited-logo-desc">
              <img src="/insider-logo.png" alt="Unlimited Logo" className="footer-unlimited-logo" />
              <span>Access over 29,000+ digital comics</span>
            </div>
          </div>
          <div className="footer-col footer-col-social">
            <div className="footer-col-title">FOLLOW MARVEL</div>
            <div className="footer-social-icons">
            <a href="#"><img src="/social.png" alt="Unlimited Logo" className="footer-unlimited-logo" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Your US State Privacy Rights</a>
          <a href="#">Children's Online Privacy Policy</a>
          <a href="#">License Agreement</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <div className="footer-bottom-copyright">
          ©2022 MARVEL.
        </div>
      </div>
    </footer>
  );
} 