
import { Row, Col} from "antd";
import { EnvironmentFilled,ClockCircleOutlined,GlobalOutlined } from "@ant-design/icons";
import styles from "./reviewdetail.module.css";


function ReviewDetail({ review }) {
 

  return (
    <Row gutter={[0, 0]} style={{ justifyContent: "center", margin: "1rem" }}>
      <h2 className={styles.category}>{review.category}</h2>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <div className={styles.infobar}>
          <h1 className={styles.name}>{review.name}</h1>
        </div>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 6 }}>
        <img alt={review.name} className={styles.image} src={review.image} />
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 14 }}>
        <div className={styles.info}>
          <p className={styles.description}>{review.description_long}</p>
        </div>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 14 }}>
        <div className={styles.infobox}>
          <div className={styles.infosection}>
            <EnvironmentFilled style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{review.site}</p>
          </div>
          <div className={styles.infosection}> 
            <ClockCircleOutlined style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{review.time}</p>
          </div>
          <div className={styles.infosection}>
            <GlobalOutlined style={{color:"black",marginRight:"2rem"}}/>
            <p className={styles.description}>{review.website}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ReviewDetail;
