"use client";

import Link from "next/link";
import { Row, Col } from "antd";
import styles from "./historyitem.module.css";

export default function HistoryItem({ history }) {
  return (
    <div className={styles.item}>
      <Row>
        <Link href="/product">
          {/* <Link to={`/plans/id/${plan.id}`}> */}
          <img
            style={{ width: "100%" }}
            src={history.image}
            alt={history.name}
            className={styles.image}
          />
        </Link>
      </Row>

      <Row className={styles.info}>
        <Col span={24}>
          <p className={styles.name}>{history.name}</p>
        </Col>
        <Col span={24}>
          <h2 className={styles.description}>{history.description}</h2>
        </Col>
      </Row>
    </div>
  );
}
