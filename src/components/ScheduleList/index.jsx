import { Row, Col } from "antd";
import ScheduleItem from "../ScheduleItem";
import styles from "./schedulelist.module.css";
import { EditOutlined } from "@ant-design/icons";

export default function ScheduleList({ schedules }) {
  return (
    <Row gutter={[32, 32]} style={{marginLeft:'0px !important'}}>
      <div className={styles.head}>
        <div>
          <p>首頁</p>
        </div>
        <div className={styles.head_bar}>
          <div className={styles.info_bar}>
            <div className={styles.info_date}>9/28-9/30</div>
            <div className={styles.info_title}>
              快樂北北基
            </div>
            <div className={styles.info_description}>
              這次旅費只有1500,然後美美還沒說說到底要不要去...
            </div>
          </div>   
            <div className={styles.edit}> 
              <EditOutlined style={{color:'black'}}/>
              <span className={styles.edit_description}>編排順序</span>
            </div>
        </div>
      </div>
      {schedules.map((schedule) => (
        <Col
          key={schedule.id}
          sm={{ span: 8 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <ScheduleItem schedule={schedule} />
        </Col>
      ))}
    </Row>
  );
}
