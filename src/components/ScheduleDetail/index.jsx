import { useState } from "react";
import { Row, Col, Select } from "antd";
import { EnvironmentFilled,ClockCircleOutlined,GlobalOutlined } from "@ant-design/icons";
import styles from "./scheduledetail.module.css";
const { Option } = Select;

function ScheduleDetail({ schedule }) {
  const [qty, setQty] = useState(schedule.countInStock > 0 ? 1 : 0);

  return (
    <Row gutter={[0, 0]} style={{ justifyContent: "center", margin: "1rem" }}>
      <h2 className={styles.category}>{schedule.category}</h2>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <div className={styles.infobar}>
          <h1 className={styles.name}>{schedule.name}</h1>
        </div>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <img alt={schedule.name} className={styles.image} src={schedule.image} />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 14 }}>
        <div className={styles.info}>
          <p className={styles.description}>{schedule.description_long}</p>
        </div>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 14 }}>
        <div className={styles.infobox}>
          <div className={styles.infosection}>
            <EnvironmentFilled style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{schedule.site}</p>
          </div>
          <div className={styles.infosection}> 
            <ClockCircleOutlined style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{schedule.time}</p>
          </div>
          <div className={styles.infosection}>
            <GlobalOutlined style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{schedule.website}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ScheduleDetail;
