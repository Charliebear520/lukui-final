import { Row, Col } from "antd";
import IsProcessItem from "../IsProcessItem";
import styles from "./isprocess.module.css"

export default function IsProcessList({processes}) {
  return (
    <div>
    <div className={styles.boxtitle}>
      <h1 className={styles.title}>正在進行</h1>
    </div>
    <Row className={styles.section}>
        <Row gutter={[32, 32]} className={styles.section2}>
        {processes.map(process => (
        <Col 
          key={process.id} 
          sm={{ span: 24 }} 
          md={{ span: 24 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <IsProcessItem process={process}/>
        </Col>
      ))}
        </Row>
       
        
    </Row>
    </div>

    
  );
}

