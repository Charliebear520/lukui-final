import { Row, Col } from "antd";
import styles from "./mycollectionlist.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function MyCollectionList({mycollections}) {
  return (
    <Row gutter={[32, 0]} className={styles.section}>
    <Col
      xs={{ span: 24 }}
      lg={{ span: 24 }}
      xl={{ span: 24 }}
      xxl={{ span: 24 }}
      className={styles.col}
    >
  <div className={styles.title_bar}>
    <p className={styles.title}>我的收藏</p>
    <p className={styles.more}>查看全部</p>
  </div>
      
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
       
        {mycollections.map((mycollection) => (
          <SwiperSlide className={styles.swiper_slide} key={mycollection.id}>
            <Link to={`/mycollections/id/${mycollection.id}`}>
            <img
              className={styles.photo}
              src={mycollection.image}
              alt={mycollection.name}
            />
            </Link>
        
            <p className={styles.name}>{mycollection.name}</p>
            <p className={styles.description}>{mycollection.description}</p>
            {/* <p>{mycollection.comment}</p> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  </Row>
  );
}

