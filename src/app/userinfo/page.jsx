import UserInfoList from "@/components/UserInfoList";
import UserInfoHeader from "@/components/UserInfoHeader";
import { Row,Col } from "antd";

export const metadata = {
  title: "Blog",
};

export default function Userinfo() {
  return (
    <> 
    <UserInfoHeader/>
        <Row>     
            <Col span={24}>
            <UserInfoList />
            </Col>      
        </Row>
     
      
    </>
  );
}
