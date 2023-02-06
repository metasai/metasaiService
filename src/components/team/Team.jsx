import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Partner from '../partner/Partner';

function Team() {
    const [dataBlock] = useState({
      subheading: "We Are Partnered with Top Brands",
      heading: "PARTNERS",
    });

    return (
        <section className="team">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="block-text center">
                            <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                            <h3 className="heading pd">{dataBlock.heading}</h3>
                        </div>
                        <Partner />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Team;