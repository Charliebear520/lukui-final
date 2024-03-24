"use client";

import { Row, Col, Button, Select } from "antd";
import IsPlanningCollectionItem from "../IsPlanningCollectionItem";
import styles from "./isplanning.module.css";

export default function IsPlanningCollection({ collections }) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const labelRender = (props) => {
    const { label, value } = props;
    if (label) {
      return value;
    }
    return <span className={styles.txt}>篩選器</span>;
  };
  return (
    <Row className={styles.row}>
      <Col
        sm={{ span: 24 }}
        md={{ span: 20 }}
        lg={{ span: 20 }}
        xl={{ span: 20 }}
      >
        <div className={styles.selectbox}>
          <Select
            defaultValue="1"
            className={styles.select}
            labelRender={labelRender}
            // placeholder="篩選器"
            size="small"
            variant="borderless"
            style={{
              width: 110,
              height: 35,
            }}
            onChange={handleChange}
            options={[
              {
                value: "臺北市",
                label: "臺北市",
              },
              {
                value: "新北市",
                label: "新北市",
              },
              {
                value: "基隆市",
                label: "基隆市",
              }
            ]}
          />
        </div>
        <Row gutter={[24, 0]}>
          {collections.map((collection) => (
            <Col
              key={collection.id}
              xs={{ span: 12 }}
              md={{ span: 6 }}
              lg={{ span: 4 }}
              xl={{ span: 4 }}
            >
              <div className={styles.section}>
                <div className={styles.section2}>
                  <IsPlanningCollectionItem collection={collection} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
