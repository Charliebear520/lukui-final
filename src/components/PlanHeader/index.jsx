import { Row, Col } from "antd";
import Image from "next/image";
import styles from "./header.module.css";

export default function PlanHeader() {
  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        <Col
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          className={styles.col}
        >
          <div className={styles.photo}>
            <Image
              src="/planheader.jpeg"
              alt="background image"
              //   style={{ position: "relative"}}
              className={styles.boximg}
              //   width={1230}
              //   height={285}
              fill={true}
            />
            <div className={styles.titlebox}>
              <Row>
                <h1 className={styles.title}>我的行程</h1>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
