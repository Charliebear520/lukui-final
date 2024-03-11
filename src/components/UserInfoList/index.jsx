import { Row, Col } from "antd";
import styles from "./userinfolist.module.css";
import { SmileFilled, QuestionCircleFilled ,SettingFilled} from "@ant-design/icons";

export default function UserInfoList() {
  return (
    <Row>
      <Col
        xs={{ span: 12 }}
        lg={{ span: 6 }}
        xl={{ span: 3 }}
        xxl={{ span: 4 }}
      >
        <div className={styles.section1}>
          <div className={styles.section2}>
            <SmileFilled
              className={styles.smile}
              style={{ fontSize: "36px" }}
            />
            <h1 className={styles.word}>關於我們</h1>
          </div>
        </div>
      </Col>
      <Col
        xs={{ span: 12 }}
        lg={{ span: 6 }}
        xl={{ span: 3 }}
        xxl={{ span: 4 }}
      >
        <div className={styles.section1}>
          <div className={styles.section2}>
            <QuestionCircleFilled
              className={styles.smile}
              style={{ fontSize: "36px" }}
            />

            <h1 className={styles.word}>幫助中心</h1>
          </div>
        </div>
      </Col>
      <Col
        xs={{ span: 12 }}
        lg={{ span: 6 }}
        xl={{ span: 3 }}
        xxl={{ span: 4 }}
      >
        <div className={styles.section1}>
          <div className={styles.section2}>
            <SettingFilled
              className={styles.smile}
              style={{ fontSize: "36px" }}
            />
            <h1 className={styles.word}>設定</h1>
          </div>
        </div>
      </Col>
    </Row>
  );
}
