import styles from "./header.module.css";

import { Col,Row} from "antd";

import image from "../../images/基隆.jpeg";

export default function MyScheduleHeader() {
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
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "white",
                  testAlign: "center",
                  top: 0,
                  left: 0,
                  height: "206px",
                  borderRadius:"0 0 70px 0",
                }}
              >
     
                <Row gutter={[32, 32]} className={styles.content}>
                  <Col
                    xs={{ span: 24 }}
                    lg={{ span: 12 }}
                    xl={{ span: 9 }}
                    xxl={{ span: 8 }}
                    className={styles.col}
                  >
                    {" "}
             
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

