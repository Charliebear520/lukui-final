import { Row, Col } from "antd";
import ReadyGoPlanList from "@/components/ReadyGoPlanList";
import IsProcessPlanList from "@/components/IsProcessPlanList";
import IsPlanningList from "@/components/IsPlanningList";

import processes from "../../json/process.json";
import collections from "../../json/collection.json";
import plans from "../../json/planning.json";

export default function Plan() {
  return (
    <>

      <Row>
        <Col
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <IsProcessPlanList processes={processes} />
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <ReadyGoPlanList collections={collections} />
        </Col>
      </Row>
      <Row>
        <Col
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
        >
          <IsPlanningList plans={plans} />
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
        >
          <IsPlanningList plans={plans} />
        </Col>
      </Row>
    </>
  );
}
