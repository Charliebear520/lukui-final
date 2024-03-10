"use client"

import styles from "./footer.module.css";
import { Row, Col, BackTop } from "antd";
import { MailFilled } from "@ant-design/icons";
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Row>
        <Col span={8}>
          <div className={styles.box}>
            <div className={styles.rectangle}>
                <Image src="/logo.png"
                alt="logo image" width={70} height={70}/>
            </div>
          </div>
        </Col>
        <Col span={16}>
          <div className={styles.box2}>
            {/* <div className={styles.rectangle2}/> */}
            <div className={styles.rectangle2}>
              <BackTop className={styles.backbtn}>BackToTop</BackTop>
            </div>
          </div>
        </Col>
      </Row>

      <div className={styles.box3}>
        <div className={styles.rectangle3}>
          <Row gutter={[32, 32]}>
            <Col
              xs={{ span: 24 }}
              lg={{ span: 24 }}
              xl={{ span: 6 }}
              xxl={{ span: 6 }}
            >
              <div className={styles.content}>
                <p style={{ fontWeight: 500 }}>聯絡我們</p>
                <hr className={styles.hrFooterLine} />
                <div>
                  <Row>
                    <Col span={12}>
                      <p style={{ fontWeight: 500 }}>程式</p>
                    </Col>
                    <Col span={12}>
                      <p style={{ fontWeight: 500 }}>UI/UX</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}>
                      <Row>
                        <p style={{ fontWeight: 500 }}>黃塏峻</p>
                        <MailFilled
                          style={{
                            fontSize: "16px",
                            color: "#08c",
                            marginLeft: 10,
                          }}
                        />
                      </Row>
                    </Col>
                    <Col span={6}>
                    <Row>
                        <p style={{ fontWeight: 500 }}>呂修逸</p>
                        <MailFilled
                          style={{
                            fontSize: "16px",
                            color: "#08c",
                            marginLeft: 10,
                          }}
                        />
                      </Row>
                    </Col>
                    <Col span={6}>
                    <Row>
                        <p style={{ fontWeight: 500 }}>黃宥瑄</p>
                        <MailFilled
                          style={{
                            fontSize: "16px",
                            color: "#08c",
                            marginLeft: 10,
                          }}
                        />
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col
              xs={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 6 }}
              xxl={{ span: 6 }}
            >
              {" "}
              <div className={styles.followUs}>
                <p style={{ fontWeight: 500 }}>服務條款</p>
                <hr className={styles.hrFooterLine} />
                <div className={styles.iconsArea}>
                  <a>
                    <p style={{ fontWeight: 400 }}>服務條款</p>
                  </a>
                  <a>
                    <p style={{ fontWeight: 400 }}>隱私權政策</p>
                  </a>
                  <a>
                    <p style={{ fontWeight: 400 }}>Cookie政策</p>
                  </a>
                </div>
              </div>
            </Col>
            <Col
              xs={{ span: 12 }}
              lg={{ span: 12 }}
              xl={{ span: 6 }}
              xxl={{ span: 6 }}
            >
              {" "}
              <div className={styles.followUs}>
                <p style={{ fontWeight: 500 }}>合作對象</p>
                <hr className={styles.hrFooterLine} />
                <div className={styles.iconsArea}>
                  <a>
                    <p style={{ fontWeight: 400 }}>由衷感謝！</p>
                  </a>
                  <a>
                    <p style={{ fontWeight: 400 }}>
                      因為有你們，才完整了旅龜！
                    </p>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
