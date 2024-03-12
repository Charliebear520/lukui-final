"use client";

import { Row, Col, Button } from "antd";
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
    <Row className={styles.row}>
      <Col span={24} className={styles.titlebox}>
        <h1 className={styles.title}>規劃中</h1>
        <Button type="link" className={styles.description}>
          <p>查看全部 </p>
        </Button>
      </Col>
      <hr className={styles.hrline} />
      <Swiper
        spaceBetween={30}
        className={styles.mySwiper}
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        <Row>
          {plans.map((plan) => (
            <SwiperSlide key={plan.id}>
              <div className={styles.section}>
                <div className={styles.section2}>
                  <IsPlanningItem plan={plan} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Row>
      </Swiper>
    </Row>
  );
}
