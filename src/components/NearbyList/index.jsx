import { Row, Col, Divider } from "antd";
import Image from "next/image";
import styles from "./nearby.module.css";
import { FireOutlined,PlusOutlined} from "@ant-design/icons";

export default function NearbyList({ nearbys }) {
  return (
    <Row className={styles.row}>
      <Col
        sm={{ span: 24 }}
        md={{ span: 20 }}
        lg={{ span: 16 }}
        xl={{ span: 16 }}
      >
        <Row gutter={[32, 32]} className={styles.row2}>
          {nearbys.map((nearby) => (
            <Col
              key={nearby.id}
              sm={{ span: 8 }}
              md={{ span: 8 }}
              lg={{ span: 4 }}
              xl={{ span: 4 }}
            >
              <div className={styles.container}>
                <div className={styles.section}>
                  <div className={styles.imagebox}>
                    <Image
                      src={nearby.image}
                      width={120}
                      height={120}
                      alt="Suggest of art"
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.iconbox}>
                    <PlusOutlined className={styles.icon} style={{fontSize:'36px'}}/>
                  </div>
                </div>
                <div className={styles.section2}>
                  <h1 className={styles.name}>{nearby.name}</h1>
                  <div className={styles.quantitybox}>
                    <FireOutlined />
                    <p className={styles.description}>{nearby.quantity}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
