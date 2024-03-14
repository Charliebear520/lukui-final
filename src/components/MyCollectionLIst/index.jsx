"use client";

import { Row, Col, Button } from "antd";
import MyCollectionItem from "../MyCollectionItem";
import styles from "./mycollectionlist.module.css";
import Divider from "antd";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import Link from "next/link";
import Image from "next/image";

export default function MyCollectionList({ mycollections }) {
  return (
    <Row className={styles.row}>
      <Col span={24} className={styles.titlebox}>
        <h1 className={styles.title}>我的收藏</h1>
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
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
      >
        <Row>
          {mycollections.map((mycollection) => (
            <SwiperSlide key={mycollection.id}>
              <div className={styles.section}>
                <div className={styles.section2}>
                  <MyCollectionItem mycollection={mycollection} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Row>
      </Swiper>
    </Row>
  );
}
