"use client";

import { Row, Col, Input, Button } from "antd";
import { Checkbox, CheckboxGroup, useMediaQuery, Progress } from "rsuite";
import Image from "next/image";

import styles from "./register.module.css";

export default function RegisterDetail() {
  
  return (
    <Row className={styles.rowbox}>
      <Col
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 6 }}
        xl={{ span: 6 }}
      >
        <div className={styles.section}>
          <h1>第二步</h1>
          <p>歡迎你的加入，東西南北！ 請選擇至少一種你喜歡的行程類型。</p>
        </div>
      </Col>
      <Col
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 18 }}
        xl={{ span: 18 }}
        className={styles.registerbox}
      >
        <div className={styles.section2}>
          <h1 className={styles.title}>第一步</h1>
          <div className={styles.progressbox}>
            <p className={styles.text}>總共只有兩個步驟！</p>
            <Progress.Line
              percent={50}
              showInfo={false}
              strokeColor="#FFBFBF"
            />
          </div>
          <div className={styles.progressbox}>
            <h1>名稱</h1>
            <Input
              placeholder="請輸入4-10位全形字元"
              className={styles.input}
            />
          </div>
          <div className={styles.progressbox}>
            <CheckboxGroup className={styles.radiobox}>
              <Row>
                <Col
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 8 }}
                  xl={{ span: 8 }}
                >
                  <div className={styles.checkbox}>
                    <Image
                      src="/logo.png"
                      width={200}
                      height={200}
                      alt="Picture of the author"
                      objectFit="cover"
                      objectPosition="center"
                      className={styles.bgImage}
                    />
                    <Checkbox value="A" className={styles.radio} />
                  </div>
                </Col>
                <Col
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 8 }}
                  xl={{ span: 8 }}
                >
                  <Checkbox value="B" className={styles.radio} />
                </Col>
                <Col
                  sm={{ span: 24 }}
                  md={{ span: 24 }}
                  lg={{ span: 8 }}
                  xl={{ span: 8 }}
                >
                  <Checkbox value="C" className={styles.radio} />
                </Col>
              </Row>
            </CheckboxGroup>
          </div>
        </div>
      </Col>
    </Row>
  );
}
