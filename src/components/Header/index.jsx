"use client";

import styles from "./header.module.css";
import { Input, Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.container}>
      <Row gutter={[32, 32]}>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className={styles.photo}>
            <Image
              src="/home-bg.jpeg"
              alt="background image"
              className={styles.bg}
              fill={true}
            />
            <div>
              <Row gutter={[32, 32]} className={styles.content}>
                <Col
                  xs={{ span: 24 }}
                  lg={{ span: 12 }}
                  xl={{ span: 9 }}
                  xxl={{ span: 8 }}
                  className={styles.col}
                >
                  {" "}
                  <Row>
                    <div className={styles.name}>
                      <h1 className={styles.title}>探索</h1>
                    </div>
                  </Row>
                  <Row>
                    <div className={styles.description}>
                      <h3 className={styles.descrip}>您的所在地：</h3>
                    </div>
                  </Row>
                  <Row>
                    {/* <Input className={styles.button}>
                        <span style={{ marginRight: "4rem" }}>
                          Explore the collection
                        </span>
                        <SearchOutlined style={{ fontSize: "18px" }} />
                      </Input> */}
                    <Input
                      placeholder="歡迎回來，阿雪！你想去哪？"
                      prefix={<SearchOutlined />}
                    />
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
