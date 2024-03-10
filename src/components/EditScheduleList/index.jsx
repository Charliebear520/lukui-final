import { Row, Col } from "antd";
import EditScheduleItem from "../EditScheduleItem";

export default function EditScheduleList({schedules}) {
  return (
    <Row gutter={[32, 32]} style={{flexDirection:'column'}}>
    {schedules.map(schedule => (
        <Col 
          key={schedule.id} 
          sm={{ span: 24 }} 
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <EditScheduleItem schedule={schedule}/>
        </Col>
      ))}
    </Row>
  );
}