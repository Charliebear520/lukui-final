"use client";

import Link from "next/link";
import { Row, Col } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

import styles from "./mycollectionitem.module.css";

export default function MyCollectionItem({ mycollection }) {
  return (
    <div className={styles.item}>
      <Row>
        <div className={styles.btnbox}>
          <PlusCircleFilled className={styles.icon} style={{ fontSize: '36px', color: 'pink' }} />
        </div>
        <Link href="/product">
          {/* <Link to={`/plans/id/${plan.id}`}> */}
          <img
            style={{ width: "100%" }}
            src={mycollection.image}
            alt={mycollection.name}
            className={styles.image}
          />
        </Link>
      </Row>

      <Row className={styles.info}>
        <Col span={24}>
          <p className={styles.name}>{mycollection.name}</p>
        </Col>
        <Col span={24}>
          <h2 className={styles.description}>{mycollection.description}</h2>
        </Col>
      </Row>
    </div>
  );
}
