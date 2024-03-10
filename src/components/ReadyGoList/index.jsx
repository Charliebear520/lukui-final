import { Row, Col } from "antd";
import ReadyGoItem from "../ReadyGoItem";
import styles from "./readygo.module.css";
import vector from "../../images/vector.png";

export default function ReadyGoList({ collections }) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${vector})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          testAlign: "center",
          height: "65px",
          width:"217px"
        }}
        className={styles.boximg}
      >
        <div className={styles.boxtitle}>
          <h1 className={styles.title}>即將啟程</h1>
        </div>
      </div>

      <Row gutter={[0, 32]} className={styles.section}>
        {collections.map((collection) => (
          <Col
            key={collection.id}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 8 }}
            xl={{ span: 8 }}
          >
            <ReadyGoItem collection={collection} />
          </Col>
        ))}
      </Row>
    </div>
  );
}