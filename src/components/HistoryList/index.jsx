"use client";

import { Row, Col, Button } from "antd";
import HistoryItem from "../HistoryItem";
import styles from "./historylist.module.css";
import Divider from "antd";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import Link from "next/link";
import Image from "next/image";

export default function HistoryList({ historys }) {
  return (
    <Row className={styles.row}>
      <Col span={24} className={styles.titlebox}>
        <h1 className={styles.title}>過往紀錄</h1>
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
          {historys.map((history) => (
            <SwiperSlide key={history.id}>
              <div className={styles.section}>
                <div className={styles.section2}>
                  <HistoryItem history={history} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Row>
      </Swiper>
    </Row>
  );
}
