"use client"

import { Row, Col } from "antd";
import IsProcessHomeItem from "../IsProcessHomeItem";
import styles from "./isprocesshomelist.module.css";
import Image from "next/image";


export default function IsProcessHomeList({ processes }) {
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
              // fill={true}
            />
        <div className={styles.boxtitle}>
          <h1 className={styles.title}>正在進行</h1>
        </div>
      </div>

      <Row gutter={[0, 32]} className={styles.section}>
        {processes.map((process) => (
          <Col
            key={process.id}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24}}
            xl={{ span: 24 }}
          >
            <IsProcessHomeItem process={process} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
