import React , {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";


import About1 from "../../assets/images/metaSai/BRANDAI_service_.jpg";
import About2 from "../../assets/images/metaSai/about2.png";
import About3 from "../../assets/images/metaSai/NFT_service.jpg";
import About4 from "../../assets/images/metaSai/about4.png";
import { AboutImgList } from './aboutImg';


function About(props) {
  const slideImg = useRef(About3);
    const [dataImg, setDataImg] = useState([
      {
        id: 1,
        img: About3,
        class: "img1",
      },
      {
        id: 2,
        img: About2,
        class: "img2",
      },
      {
        id: 3,
        img: About1,
        class: "img3",
      },
      {
        id: 4,
        img: About4,
        class: "img4",
      },
      {
        id: 5,
        img: About4,
        class: "img5",
      },
      {
        id: 6,
        img: About4,
        class: "img5",
      },
    ]);

    const imgIndexList = [About3, About2, About4, About1, About3];
    const onSlideChangeHandler = (index) => {
      console.log("index: ", index);
      setDataImg([...AboutImgList[index - 1]]);
      
    };

    const dataBlocks = [
      {
        id: 1,
        subheading: "About us",
        heading: "NFT-Tech",
        desc1: "하이퍼레저 기반 메인넷 구축 ERC-20기반 코인 이코노미 형성.",
        desc2: "NFT 상품의 지분소유 거래가 가능한 스마트 컨트렉트",
        desc3: "NFT아이템을 등록 판매 가능한 웹 마켓 구축",
        desc4: "",
      },
      {
        id: 2,
        subheading: "About us",
        heading: "Vertual Univ",
        desc1: "Unity 엔진 활용한 3D 아바타 및 가상환경 구현 다중접속환경 속 요소들을 관리하고 성장시키는 환경 구축",
        desc2: "P2E와 민팅이 가능한 통합 생횔 및 경제 시스템 지향",
        desc3: "",
        desc4: "",
      },
      {
        id: 3,
        subheading: "About us",
        heading: "Brands AI",
        desc1: "D2C 커머스 시스템을 위한 '다중 분석 지능 AI' 설계 및 구축'",
        desc2: "네이버, 번개장터 등 리얼 빅데이터에 기반한 브랜드 평가 솔루션",
        desc3: "",
        desc4: "",
      },
      {
        id: 4,
        subheading: "About us",
        heading: "Forecast Platform",
        desc1: "‘모든 시민은 전문가다’라는 캐치프레이즈에 기반한 집단지성 플랫폼",
        desc2: "지식서비스,퀴즈,서베이의 복합적인 성격을 가진  컨텐츠를 제공",
        desc3: "이용자 기반의 전문지식을 창출해내며, 예측을 테마로 새로운 시장 구축",
        desc4: "C2C, B2C 컨텐츠가 공존하는 플랫폼으로써 다양한 분야의 노하우를 쌓아나가는 플랫폼으로의 성장 기대",
      },
    ];
    return (
      <section className="about">
        <div className="shape"></div>
        <div className="container">
          <div className="row rev">
            <div className="col-xl-6 col-md-12">
              <div className="about__right">
                <div className="images">
                  {dataImg.map(idx => {
                    return (
                      <>
                          <img
                            key={idx.id}
                            className={idx.class}
                            src={idx.img}
                            alt="cyfonii"
                          />
                      </>
                    );
                    })}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                }}
                onSlideChange={swiper => {
                  onSlideChangeHandler(swiper?.activeIndex);
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="bannerSwiper"
              >
                {dataBlocks.map(item => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="block-text">
                        <h6 className="sub-heading">
                          <span>{item.subheading}</span>
                        </h6>
                        <h3 className="heading">{item.heading}</h3>
                        <p className="mb-17">{item.desc1}</p>
                        <p className="mb-26">{item.desc2}</p>
                        <p className="mb-26">{item.desc3}</p>
                        <p className="mb-26">{item.desc4}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;