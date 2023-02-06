import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../button/Button';


Project2.propTypes = {
    data: PropTypes.array
};

function Project2(props) {
    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'PROJECTS',
            heading: 'PROJECTS',
            
        }
    )
    return (
      <section className="project s2">
        <div className="shape right"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h6 className="sub-heading">
                  <span>{dataBlock.subheading}</span>
                </h6>
                <h3 className="heading ">{dataBlock.heading}</h3>
              </div>
            </div>
            {data.map(idx => (
              <div key={idx.id} className="col-xl-3 col-md-6">
                <div className="project-box">
                  <div className="image">
                    <a src="" style={{ cursor: "unset" }}>
                      <img src={idx.img} alt="Cyfonii" />
                    </a>
                  </div>
                  <div className="content">
                    <a
                      to="/nfts"
                      className="h5 title"
                      style={{ cursor: "unset" }}
                    >
                      {idx.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>
    );
}

export default Project2;