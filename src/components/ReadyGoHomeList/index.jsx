"use client"

import { Row, Col } from "antd";
import Image from "next/image";
import styles from "./readygo.module.css";

import ReadyGoHomeItem from "../ReadyGoHomeItem";

export default function ReadyGoHomeList({ collections }) {
  return (
    <div className={styles.container}>
      <div
        // style={{
        //   backgroundImage: `url(${vector})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   color: "white",
        //   testAlign: "center",
        //   height: "65px",
        //   width:"217px"
        // }}
        // className={styles.boximg}
      >
           <Image
              src="/vector.png"
              alt="background image"
              className={styles.boximg}
              height={65}
              width={217}
            />
        <div className={styles.boxtitle}>
          <h1 className={styles.title}>即將啟程</h1>
        </div>
      </div>

      <Row gutter={[0, 32]} className={styles.section}>
        {collections.map((collection) => (
          <Col
            key={collection.id}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
            xl={{ span: 24}}
          >
            <ReadyGoHomeItem collection={collection} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
