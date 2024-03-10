import { Row, Col } from "antd";
import NearbyItem from "../NearbyItem";

export default function NearbyList({nearbys}) {
  return (
    <Row gutter={[32, 32]}>
    {nearbys.map(nearby => (
        <Col 
          key={nearby.id} 
          sm={{ span: 8 }} 
          md={{ span: 8 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <NearbyItem nearby={nearby}/>
        </Col>
      ))}
    </Row>
  );
}

