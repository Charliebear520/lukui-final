import { useState } from "react";
import { Row, Col, Select } from "antd";
import { EnvironmentFilled,ClockCircleOutlined,GlobalOutlined } from "@ant-design/icons";
import styles from "./recentdetail.module.css";
const { Option } = Select;

function RecentDetail({ recent }) {
  const [qty, setQty] = useState(recent.countInStock > 0 ? 1 : 0);

  return (
    <Row gutter={[0, 0]} style={{ justifyContent: "center", margin: "1rem" }}>
      <h2 className={styles.category}>{recent.category}</h2>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <div className={styles.infobar}>
          <h1 className={styles.name}>{recent.name}</h1>
        </div>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <img alt={recent.name} className={styles.image} src={recent.image} />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 14 }}>
        <div className={styles.info}>
          <p className={styles.description}>{recent.description_long}</p>
        </div>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 14 }}>
        <div className={styles.infobox}>
          <div className={styles.infosection}>
            <EnvironmentFilled style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{recent.site}</p>
          </div>
          <div className={styles.infosection}> 
            <ClockCircleOutlined style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{recent.time}</p>
          </div>
          <div className={styles.infosection}>
            <GlobalOutlined style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{recent.website}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default RecentDetail;