"use client";

import { Row, Col } from "antd";
import IsProcessPlanItem from "../IsProcessPlanItem";
import styles from "./isprocesshomelist.module.css";

export default function IsProcessPlanList({ processes }) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.boxtitle}>
          <h1 className={styles.title}>正在進行</h1>
        </div>
      </div>

      <Row gutter={[0, 32]} className={styles.section}>
        <Row
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          className={styles.section2}
        >
          {processes.map((process) => (
            <Col
              key={process.id}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 24 }}
            >
              <IsProcessPlanItem process={process} />
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
}
