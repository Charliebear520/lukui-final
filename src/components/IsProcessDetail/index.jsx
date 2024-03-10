import { useState } from "react";
import { Row, Col, Select } from "antd";
import { EnvironmentFilled,ClockCircleOutlined,GlobalOutlined } from "@ant-design/icons";
import styles from "./isprocessdetail.module.css";
const { Option } = Select;

function IsProcessDetail({ process }) {
  // const [qty, setQty] = useState(process.countInStock > 0 ? 1 : 0);

  return (
    <Row gutter={[0, 0]} style={{ justifyContent: "flex-start", margin: "1rem" }}>
      <h2 className={styles.category}>{process.category}</h2>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <div className={styles.infobar}>
          <h1 className={styles.name}>{process.name}</h1>
        </div>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 24 }}>
        <img alt={process.name} className={styles.image} src={process.image} />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 14 }}>
        <div className={styles.info}>
          <p className={styles.description}>{process.description_long}</p>
        </div>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 14 }}>
        <div className={styles.infobox}>
          <div className={styles.infosection}>
            <EnvironmentFilled style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{process.site}</p>
          </div>
          <div className={styles.infosection}> 
            <ClockCircleOutlined style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{process.time}</p>
          </div>
          <div className={styles.infosection}>
            <GlobalOutlined style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{process.website}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default IsProcessDetail;
