"use client";

import { Row, Col, Input, Button } from "antd";
import { RadioTile, RadioTileGroup,  Progress } from "rsuite";
import Image from "next/image";
import styles from "./register.module.css";

export default function RegisterList() {


  return (
    <Row className={styles.rowbox}>
      <Col
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 16 }}
        xl={{ span: 16 }}
      >
        <Image
          src="/register.jpeg"
          alt="background image"
          objectFit="cover"
          style={{position:"relative"}}
          className={styles.boximg}
          width={860}
          height={860}
        //   fill={true}
        />
      </Col>
      <Col
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 8 }}
        xl={{ span: 8 }}
        className={styles.registerbox}
      >
        <div className={styles.section}>
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
            <Input placeholder="請輸入4-10位全形字元" className={styles.input}/>
          </div>
          <div className={styles.progressbox}>
            <h1>性別</h1>
            <RadioTileGroup
              defaultValue="blank"
              aria-label="Create new project"
          
              className={styles.radiobox}
            >
              <RadioTile label="男性" value="blank" className={styles.radio}></RadioTile>
              <RadioTile label="女性" value="template" className={styles.radio}></RadioTile>
              <RadioTile label="秘密" value="import" className={styles.radio}></RadioTile>
            </RadioTileGroup>
          </div>
          <Button className={styles.button}>下一步</Button>
        </div>
      </Col>
    </Row>
  );
}
