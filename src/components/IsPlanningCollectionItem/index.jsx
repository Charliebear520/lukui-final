"use client";

import Link from "next/link";
import { Row, Col } from "antd";
import styles from "./isplanningitem.module.css";
import { PlusOutlined } from "@ant-design/icons";

export default function IsPlanningCollectionItem({ collection }) {
  return (
    <div className={styles.item}>
      <Row className={styles.row}>
        <div className={styles.btnbox}>
          <PlusOutlined className={styles.icon} style={{ fontSize: "36px" }} />
        </div>
        <div className={styles.imagebox}>
          <Link href="/product">
            {/* <Link to={`/collections/id/${collection.id}`}> */}
            <img
              style={{ width: "100%", height: "100%" }}
              src={collection.image}
              alt={collection.name}
              className={styles.image}
            />
          </Link>
        </div>
      </Row>

      <Row className={styles.info}>
        <Col span={24}>
          <p className={styles.name}>{collection.description}</p>
        </Col>
        <Col span={24}>
          <h2 className={styles.description}>{collection.name}</h2>
        </Col>
      </Row>
    </div>
  );
}
