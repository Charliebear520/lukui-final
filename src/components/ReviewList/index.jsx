import { Row, Col, theme } from "antd";
import React from "react";

import styles from "./reviewlist.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import Link from "next/link";
import Image from "next/image";
// import "swiper/css/pagination";

// import { Pagination } from "swiper";

export default function ReviewList({ reviews }) {
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
          <h1 className={styles.logo}>附近景點</h1>
          {/* <h4 className={styles.name}>@ntuedtd_ig</h4> */}
        </div>
        <div className={styles.rectangle} />
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
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide className={styles.swiper_slide} key={review.id}>
              <Link href="blog">
                {/* <Link to={`/reviews/id/${review.id}`}> */}            
                  <Image
                    className={styles.photo}
                    src={review.image}
                    alt={review.name}
                    width={120}
                    height={120}
                  />              
              </Link>

              <p className={styles.name}>{review.name}</p>
              <p className={styles.description}>{review.description}</p>
              {/* <p>{review.comment}</p> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </Row>
  );
}
