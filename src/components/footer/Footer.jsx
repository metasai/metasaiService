import React , {useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../assets/images/metaSai/metasaiLog.svg";

function Footer(props) {


    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
      <footer className="footer">
        <div className="shape"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer__bottom">
                메타사이 서울특별시 영등포구 양평로 21길 26 대표이사 김태경 사업자등록번호 : 434-81-02156, metasai@metasai.io
              </div>
            </div>
          </div>
        </div>

        {isVisible && (
          <Link to="#" onClick={scrollToTop} id="scroll-top">
            <span className="icon-arrow-top"></span>
          </Link>
        )}
      </footer>
    );
}

export default Footer;