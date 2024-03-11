"use client";

import { Row, Col, Drawer, Button } from "antd";
import { useState } from "react";
import { HeartFilled } from "@ant-design/icons";
import styles from "./ranklist.module.css";

import Link from "next/link";
import Image from "next/image";

export default function RankDetailList({ ranks }) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("bottom");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Row className={styles.section}>
      {ranks.map((rank) => (
        <Col
          key={rank.id}
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
        >
          <div className={styles.rankbox}>
            <Col span={12} className={styles.photobox}>
              <Link href="/blog">
                {/* <Link to={`/ranks/id/${rank.id}`}> */}
                <Image
                  className={styles.photo}
                  src={rank.image}
                  alt={rank.name}
                  width={154}
                  height={200}
                />
              </Link>
            </Col>
            <Col span={12}className={styles.infobox}>
              <div className={styles.togglebox}>
                <div className={styles.likebox}>
                  <HeartFilled />
                </div>
                <div>
                  <Button className={styles.addbox} onClick={showDrawer}>
                    ＋ 加到行程
                  </Button>
                  <Drawer
                    title="加入至"
                    placement={placement}
                    closable={false}
                    onClose={onClose}
                    open={open}
                    key={placement}
                    className={styles.drawer}
                  >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                  </Drawer>
                </div>
              </div>
              <div className={styles.rankinfobox}>
                <p className={styles.name}>{rank.name}</p>
                <p className={styles.description}>{rank.description}</p>
                <p className={styles.status}>{rank.status}</p>
                <p className={styles.endtime}>結束營業時間：{rank.end_time}</p>
              </div>
            </Col>
          </div>
          <hr className={styles.hrline} />
        </Col>
      ))}
    </Row>
  );
}
