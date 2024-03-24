"use client";

import Link from "next/link";
import { Row, Col } from "antd";
import styles from "./isplanningitem.module.css";

export default function IsPlanningHistoryItem({ history }) {
  return (
    <div className={styles.item}>
      
      <Row className={styles.row}>
        <Link href="/product">
          {/* <Link to={`/historys/id/${history.id}`}> */}
          <img
            style={{ width: "100%" ,height:"100%"}}
            src={history.image}
            alt={history.name}
            className={styles.image}
          />
        </Link>
      </Row>

      <Row className={styles.info}>
        <Col span={24}>
          <p className={styles.name}>{history.description}</p>
        </Col>
        <Col span={24}>
          <h2 className={styles.description}>{history.name}</h2>
        </Col>
      </Row>
    </div>
  );
}
