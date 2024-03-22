import { Row, Col, Divider } from "antd";
import SuggestItem from "../SuggestItem";
import Image from "next/image";
import styles from "./suggest.module.css";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

export default function SeasideList({ seasides }) {
  return (
    <Row className={styles.row}>
      <Col
        sm={{ span: 24 }}
        md={{ span: 20 }}
        lg={{ span: 16 }}
        xl={{ span: 16 }}
      >
        <Col span={24}>
          <div className={styles.titlebox}>
            <h1 className={styles.title1}>因為你喜歡－</h1>
            <h2 className={styles.title2}>海邊</h2>
          </div>
        </Col>

        <Col
          sm={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <Divider />
        </Col>

        <Row>
          {seasides.map((seaside) => (
            <Col
              key={seaside.id}
              sm={{ span: 8 }}
              md={{ span: 8 }}
              lg={{ span: 4 }}
              xl={{ span: 4 }}
            >
              <div className={styles.container}>
                <div className={styles.section}>
                  <div className={styles.imagebox}>
                    <Image
                      src={seaside.image}
                      width={120}
                      height={120}
                      alt="Suggest of art"
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.iconbox}>
                    <HeartFilled
                      style={{
                        fontSize: "16px",
                        color: "#FFBABA",
                        border: "black",
                      }}
                    />
                  </div>
                </div>
                <div className={styles.section2}>
                  <h1 className={styles.name}>{seaside.name}</h1>
                  <p className={styles.description}>{seaside.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
