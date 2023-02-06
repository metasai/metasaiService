import React , { useState , useEffect } from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../assets/images/metaSai/metasaiLog.svg'

import './styles.scss';


const Header = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);


    return (
      <header id="header_main" className={`header ${scroll ? "is-fixed" : ""}`}>
        <div className="container big">
          <div className="row">
            <div className="col-12">
              <div className="header__body">
                <div className="header__logo">
                  <Link to="/">
                    <img id="site-logo" src={Logo} alt="cyfonii" height={'60px'} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;