"use client";

import { Row, Col } from "antd";
import IsPlanningItem from "../IsPlanningItem";
import styles from "./isplanning.module.css";
import Divider from "antd";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import Link from "next/link";
import Image from "next/image";

export default function IsPlanningList({ plans }) {
  return (
    //   <div className={styles.container}>
    //   <div>
    //     <div className={styles.head}>
    //       <h1 className={styles.logo}>規劃中</h1>
    //       <h4 className={styles.name}>查看全部</h4>
    //     </div>
    //     <Divider/>
    //   </div>

    //   <Row gutter={[0, 32]} className={styles.section}>
    //     <Row className={styles.section2}>
    //       {plans.map((plan) => (
    //         <Col
    //           key={plan.id}
    //           sm={{ span: 24 }}
    //           md={{ span: 24 }}
    //           lg={{ span: 24 }}
    //           xl={{ span: 24 }}
    //         >
    //           <IsPlanningItem plan={plan} />
    //         </Col>
    //       ))}
    //     </Row>
    //   </Row>
    // </div>

    // <div>
    //   <Row>
    //   <Col
    //     sm={{ span: 24 }}
    //     lg={{ span: 24 }}
    //     xl={{ span: 24 }}
    //     xxl={{ span: 24 }}
    //   >
    //     <div className={styles.head}>
    //       <h1 className={styles.logo}>規劃中</h1>
    //       <h4 className={styles.name}>查看全部</h4>
    //     </div>
    //     <hr className={styles.hrline} />
    //   </Col>
    //   </Row>


    //   <Row>
    //     {plans.map((plan) => (
    //       <Col
    //         key={plan.id}
    //         sm={{ span: 24 }}
    //         md={{ span: 24 }}
    //         lg={{ span: 4 }}
    //         xl={{ span: 4 }}
    //       >
    //         <Row className={styles.section}>
    //           <Row className={styles.section2}>
    //             <IsPlanningItem plan={plan} />
    //           </Row>
    //         </Row>
    //       </Col>
    //     ))}
    //   </Row>
    // </div>

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
        {plans.map((plan) => (
          <SwiperSlide className={styles.swiper_slide} key={plan.id}>
            <Link href="blog">
              {/* <Link to={`/plans/id/${plan.id}`}> */}            
                <Image
                  className={styles.photo}
                  src={plan.image}
                  alt={plan.name}
                  width={120}
                  height={120}
                />              
            </Link>

            <p className={styles.name}>{plan.name}</p>
            <p className={styles.description}>{plan.description}</p>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  </Row>
  );
}
