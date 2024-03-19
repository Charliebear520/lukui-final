"use client";

import styles from "./footer.module.css";
import { Row, Col, BackTop, Divider } from "antd";
import { MailFilled } from "@ant-design/icons";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Row gutter={[0, 0]}>
        <Col
          xs={{ order: 1, span: 12 }}
          sm={{ order: 1, span: 12 }}
          md={{ order: 1, span: 4 }}
          lg={{ order: 1, span: 4 }}
          className={styles.col}
        >
          <Image
            src="/logo.png"
            width={140}
            height={140}
            alt="Picture of logo"
          />
        </Col>
        <Col
          xs={{ order: 3, span: 24 }}
          sm={{ order: 3, span: 24 }}
          md={{ order: 2, span: 12 }}
          lg={{ order: 2, span: 12 }}
        >
          <div className={styles.section}>
            <Row className={styles.row}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <h1>聯絡我們</h1>

                <Divider className={styles.divider} />
                <div>
                  <div className={styles.box1}>
                    <div>
                      <h1>程式組</h1>
                      <div className={styles.box2}>
                        <p>黃塏峻</p>
                        <MailFilled />
                        <p>呂修逸</p>
                        <MailFilled />
                      </div>
                    </div>
                    <div className={styles.box3}>
                      <h1>UI/UX組</h1>
                      <div>
                        <div className={styles.box2}>
                          <p>黃宥瑄</p>
                          <MailFilled />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <Row>
                  <Col span={8}>
                    <h1>服務條款</h1>
                    <Divider className={styles.divider}/>
                    <div>
                      <p>服務條款</p>
                      <p>隱私權政策</p>
                    </div>
                  </Col>
                  <Col span={16}>
                    <h1>合作對象</h1>
                    <Divider className={styles.divider}/>
                    <div>
                      <p>由衷感謝！</p>
                      <p>因為有你們，才完整了旅龜！</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          xs={{ order: 2, span: 12 }}
          sm={{ order: 2, span: 12 }}
          md={{ order: 3, span: 8 }}
          lg={{ order: 3, span: 8 }}
          className={styles.col3}
        >
          <BackTop className={styles.backbtn}>BackToTop</BackTop>
        </Col>
      </Row>
    </div>
  );
}
