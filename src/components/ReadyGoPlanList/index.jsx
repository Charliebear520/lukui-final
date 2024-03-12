"use client";

import { Row, Col } from "antd";

import styles from "./readygo.module.css";

import ReadyGoPlanItem from "../ReadyGoPlanItem";

export default function ReadyGoPlanList({ collections }) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.boxtitle}>
          <h1 className={styles.title}>即將啟程</h1>
        </div>
      </div>

      <Row gutter={[0, 32]} className={styles.section}>
        <Row className={styles.section2}>
          {collections.map((collection) => (
            <Col
              key={collection.id}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
            >
              <ReadyGoPlanItem collection={collection} />
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
}
