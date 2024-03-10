import { Row, Col, theme } from "antd";
import React, { useRef, useState } from "react";
// import historyItem from "../historyItem/Index";
import styles from "./historylist.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
// import "swiper/css/pagination";


// import { Pagination } from "swiper";

export default function HistoryList({ historys }) {
  const {
    token: { colorBgBase, colorTextFooter },
  } = theme.useToken();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (

      <Row gutter={[32, 0]} className={styles.section}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
          className={styles.col}
        >
          <div className={styles.head}>
            <h1 className={styles.logo}>熱門排行</h1>
            {/* <h4 className={styles.name}>@ntuedtd_ig</h4> */}
            
          </div>
          <div className={styles.rectangle}/>
          
        </Col>
        
        <>
          <Swiper
            spaceBetween={30}
            
            // scrollbar={{
            //   hide: false,
            // }}
            // modules={[Scrollbar]}
            // modules={[Pagination]}
            className={styles.mySwiper}
            breakpoints={{
              // when window width is >= 640px
              320: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
           
            {historys.map((history) => (
              <SwiperSlide className={styles.swiper_slide} key={history.id}>
                <Link to={`/historys/id/${history.id}`}>
                <img
                  className={styles.photo}
                  src={history.image}
                  alt={history.name}
                />
                </Link>

                <p className={styles.name}>{history.name}</p>
                <p className={styles.description}>{history.description}</p>
                {/* <p>{history.comment}</p> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </Row>
   
  );
}