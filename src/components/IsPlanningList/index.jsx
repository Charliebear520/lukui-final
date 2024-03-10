import { Row, Col } from "antd";
import IsPlanningItem from "../IsPlanningItem";
import styles from "./isplanning.module.css"

export default function IsPlanningList({plans}) {
  return (
    <Row className={styles.section}>
        <Row gutter={[32, 32]} className={styles.section2}>
        <Col
          sm={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
          xxl={{ span: 24 }}
        >
          <div className={styles.head}>
            <h1 className={styles.logo}>規劃中</h1>
            <h4 className={styles.name}>查看全部</h4>
          </div>
          <hr className={styles.hrline}/>
        </Col>
        {plans.map(plan => (
        <Col 
          key={plan.id} 
          sm={{ span: 8 }} 
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <IsPlanningItem plan={plan}/>
        </Col>
      ))}
        </Row>
       
        
    </Row>
    
  );
}

