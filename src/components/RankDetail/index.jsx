
import { Row, Col } from "antd";
import { EnvironmentFilled,ClockCircleOutlined,GlobalOutlined } from "@ant-design/icons";
import styles from "./rankdetail.module.css";


function RankDetail({ rank }) {
 
  return (
    <Row gutter={[0, 0]} style={{ justifyContent: "center", margin: "1rem" }}>
      <h2 className={styles.category}>{rank.category}</h2>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <div className={styles.infobar}>
          <h1 className={styles.name}>{rank.name}</h1>
        </div>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <img alt={rank.name} className={styles.image} src={rank.image} />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 14 }}>
        <div className={styles.info}>
          <p className={styles.description}>{rank.description_long}</p>
        </div>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 14 }}>
        <div className={styles.infobox}>
          <div className={styles.infosection}>
            <EnvironmentFilled style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{rank.site}</p>
          </div>
          <div className={styles.infosection}> 
            <ClockCircleOutlined style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{rank.time}</p>
          </div>
          <div className={styles.infosection}>
            <GlobalOutlined style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{rank.website}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default RankDetail;
