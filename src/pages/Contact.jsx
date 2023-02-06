import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import Logo from "../assets/images/metaSai/metasaiLog.svg";



function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs.sendForm('service_8mo656l', 'template_k510pw4', form.current, 'mhUj6_AsOia2iKaxh')
      .then((result) => {
          if (result.text === 'OK') {
            alert('메세지를 발송하였습니다.');
            form.current.reset();
          } else {
            alert('메세지를 발송하는 도중 오류가 발생했습니다.');
          }
      }, (error) => {
        alert('메세지를 발송하는 도중 오류가 발생했습니다.');
        console.log(error.text);
      });
  };
    
    return (
      <>
        <section className="touch">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="block-text center">
                  <h6 className="sub-heading">
                    <span>Get in Touch!</span>
                  </h6>
                  <h3 className="heading">
                    Contact Us
                  </h3>
                </div>
                <div className="touch__main">
                  <div className="info">
                    <h5>Contact information</h5>
                    <ul className="list">
                      <li>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V7Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7V7Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p>
                          304, 26, Yangpyeong-ro 21-gil, Yeongdeungpo-gu, Seoul,
                          Korea
                        </p>
                      </li>
                      <li>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.5 4.5V11.5C14.5 11.8978 14.342 12.2794 14.0607 12.5607C13.7794 12.842 13.3978 13 13 13H3C2.60218 13 2.22064 12.842 1.93934 12.5607C1.65804 12.2794 1.5 11.8978 1.5 11.5V4.5M14.5 4.5C14.5 4.10218 14.342 3.72064 14.0607 3.43934C13.7794 3.15804 13.3978 3 13 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5M14.5 4.5V4.662C14.5 4.9181 14.4345 5.16994 14.3096 5.39353C14.1848 5.61712 14.0047 5.80502 13.7867 5.93933L8.78667 9.016C8.55014 9.16169 8.2778 9.23883 8 9.23883C7.7222 9.23883 7.44986 9.16169 7.21333 9.016L2.21333 5.94C1.99528 5.80569 1.81525 5.61779 1.69038 5.3942C1.56551 5.1706 1.49997 4.91876 1.5 4.66267V4.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p>metasai@metasai.io</p>
                      </li>
                    </ul>

                    <div className="image">
                      <img src={Logo} alt="cyfonii" className="contentsLogo" />
                    </div>
                  </div>


                  <form
                    className="form-box"
                    // onSubmit={e => {
                    //   e.preventDefault();
                    // }}
                    ref={form} onSubmit={sendEmail}
                  >
                    <div className="row">
                      <div className="col">
                        <label>Your name</label>
                        <input
                          type="text"
                          name="user_name"
                          className="form-control"
                        />
                      </div>
                      <div className="col">
                        <label>Your email</label>
                        <input
                          type="email"
                          name="user_email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label>Your phone</label>
                        <input
                          type="text"
                          name="user_phone"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <label>Message</label>
                        <textarea
                          name="message"
                          id="mess"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row mb-0">
                      <div className="col">
                        <button
                          className="action-btn"
                        >
                          <span>Send Now</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="map">
          <div className="container">
            <div className="row">
              <div className="map__main">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.903794830035!2d126.88970461744381!3d37.53603270000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9ec0e4c793d7%3A0x17653a5784db8a09!2z7ISg7Jyg64-ESVPruYTspojtg4Dsm4zqtIDrpqzsgqzrrLTshow!5e0!3m2!1sko!2skr!4v1674460492220!5m2!1sko!2skr"
                  title="map"
                  height="600"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

const validationHandler = (data) => {
  if (!data.user_name) {
    alert('고객님의 성함을 입력해주세요.');
    return false;
  } else if (!data.user_email && !data.user_phone) {
    alert("연락 받으실 고객님의 이메일이나 연락처를 입력해주세요.");
    return false;
  } else if (!data.message) {
    alert("문의하실 내용을 입력해주세요.");
    return false;
  }
  return true;
}
export default Contact;