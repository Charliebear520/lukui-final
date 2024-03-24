"use client";

import Link from "next/link";
import { Row, Col } from "antd";
import styles from "./isplanningitem.module.css";

export default function IsPlanningPageItem({ plan }) {
  return (
    <div className={styles.item}>
      
      <Row className={styles.row}>
        <Link href="/product">
          {/* <Link to={`/plans/id/${plan.id}`}> */}
          <img
            style={{ width: "100%" ,height:"100%"}}
            src={plan.image}
            alt={plan.name}
            className={styles.image}
          />
        </Link>
      </Row>

      <Row className={styles.info}>
        <Col span={24}>
          <p className={styles.name}>{plan.description}</p>
        </Col>
        <Col span={24}>
          <h2 className={styles.description}>{plan.name}</h2>
        </Col>
      </Row>
    </div>
  );
}
