import "./Footer.module.css";
import styles from './Footer.module.css';
import classNames from "classnames";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className={styles.wrap}>
        <div className={styles.data}>
          <img src={process.env.PUBLIC_URL + 'asset/logo.png'} alt="" className="h-28 w-28 m-auto md:m-0" />
          <h3 className={classNames("md:text-lg text-base", styles.desc)}>
            Hi, We are More Than Team, we are full-stack developers team from Viet Nam.🚀🚀🚀.Please conact us as email : <b>mothan.team@gmail.com</b>.
          </h3>
          <div className={styles.icons}>
            <a className={styles.icon} href="https://www.facebook.com/">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a className={styles.icon} href="https://www.skype.com/">
              <i className="fa fa-skype" aria-hidden="true"></i>
            </a>
            <a className={styles.icon} href="https://www.github.com/">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a className={styles.icon} href="https://www.linkedin.com/">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a className={styles.icon} href="https://twitter.com/">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="footer-nav">
          <div className="mt-2 mb-5">
            <small className={styles.navigation}>NAVIGATION</small>
          </div>

          <ul className="text-base md:text-lg font-black">
            <li className="mb-4 hover:underline"> <Link to="/">Home</Link></li>
            <li className="mb-4 hover:underline"><Link to="/about">About</Link></li>
            <li className="mb-4 hover:underline"><Link to="/contact">Contact</Link></li>
            <li className="mb-4 hover:underline"><Link to="/">Source</Link></li>
          </ul>
        </div>
      </div>
      <div className="pb-10 text-center text-sm md:text-base"><i>More Than Team © 2021. All Right Reserved.</i></div>
    </footer>
  );
}

export { Footer };