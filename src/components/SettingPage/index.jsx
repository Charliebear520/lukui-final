"use client";

import styles from "./setting.module.css";
import { Row, Col, Divider, Button, Modal } from "antd";
import { useState } from "react";
import { LockFilled } from "@ant-design/icons";

export default function SettingPage() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <div className={styles.section}>
      <Row>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          xxl={{ span: 8 }}
          className={styles.section1}
        >
          <Row>
            <Col flex={4}>
              <h1>設定</h1>
            </Col>
            <Col flex={1}></Col>
            <Divider />
          </Row>
          <Row>
            <Col flex={4}>
              <h1 className={styles.infotext}>信箱</h1>
              <p className={styles.infoptext}>aabbcc@gmail.com</p>
            </Col>
            <Col flex={1} className={styles.col}>
              <Button onClick={showModal} className={styles.butotn}>
                更改
              </Button>
              <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                {modalText}
              </Modal>
            </Col>
            <Divider />
          </Row>
          <Row>
            <Col flex={4}>
              <h1 className={styles.infotext}>修改密碼</h1>
            </Col>
            <Col flex={1} className={styles.col}>
              <Button onClick={showModal} className={styles.butotn}>
                更改
              </Button>
              <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                {modalText}
              </Modal>
            </Col>
            <Divider />
          </Row>
          <Row>
            <Col flex={4}>
              <div className={styles.infobox}>
                <h1 className={styles.infotext}>名稱</h1>
                <p className={styles.infoptext}>東南西北</p>
              </div>
            </Col>
            <Col flex={1} className={styles.col}>
              <Button onClick={showModal} className={styles.butotn}>
                更改
              </Button>
              <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                {modalText}
              </Modal>
            </Col>
            <Divider />
          </Row>
          <Row>
            <Col flex={4}>
              <div className={styles.infobox}>
                <h1 className={styles.infotext}>性別</h1>
                <p className={styles.infoptext}>女性</p>
              </div>
            </Col>
            <Col flex={1} className={styles.col}>
            <LockFilled />
              <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                {modalText}
              </Modal>
            </Col>
            <Divider />
          </Row>
          <Row>
            <Col flex={4}>
              <div className={styles.infobox}>
                <h1 className={styles.infotext}>偏好的行程類型</h1>
                <p className={styles.infoptext}></p>
              </div>
            </Col>
            <Col flex={1} className={styles.col}>
              <Button onClick={showModal} className={styles.butotn}>
                更改
              </Button>
              <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                {modalText}
              </Modal>
            </Col>
            <Divider />
          </Row>
          <Row>
            <Col flex={4}>
              <div className={styles.infobox}>
                <h1 className={styles.infotext}>預計抵達時間</h1>
                <p className={styles.infoptext}>上午8:00</p>
              </div>
            </Col>
            <Col flex={1} className={styles.col}>
              <Button onClick={showModal} className={styles.butotn}>
                更改
              </Button>
              <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                {modalText}
              </Modal>
            </Col>
            <Divider />
          </Row>
          <Row>
            <Col flex={4}>
              <div className={styles.infobox}>
                <h1 className={styles.infotext}>預計停留時間</h1>
                <p className={styles.infoptext}>1小時</p>
              </div>
            </Col>
            <Col flex={1} className={styles.col}>
              <Button onClick={showModal} className={styles.butotn}>
                更改
              </Button>
              <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                {modalText}
              </Modal>
            </Col>
            <Divider />
          </Row>
          <Row>
            <Col flex={4}>
              <div className={styles.infobox}>
                <h1 className={styles.infotext}>刪除帳號</h1>
                <p className={styles.infoptext}></p>
              </div>
            </Col>
            <Col flex={1} className={styles.col}>
              <Button onClick={showModal} className={styles.butotn}>
                查看
              </Button>
              <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                {modalText}
              </Modal>
            </Col>
            <Divider />
          </Row>
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          xxl={{ span: 8 }}
        >
          <div></div>
        </Col>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 8 }}
          xxl={{ span: 8 }}
        >
          <div></div>
        </Col>
      </Row>
    </div>
  );
}
