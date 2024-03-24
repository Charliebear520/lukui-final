

import Link from "next/link";
import { Row,Col } from "antd";
import IsProcessHomeList from "../components/IsProcessHomeList";
import ReadyGoHomeList from "@/components/ReadyGoHomeList";
import ReviewList from "@/components/ReviewList";
import SuggestHomeList from "@/components/SuggestHomeList";
import RankList from "@/components/RankList";
import RecentList from "@/components/RecentList";
import Header from "../components/Header";

import processes from "../json/process.json"
import collections from "../json/collection.json"
import reviews from "../json/reviews.json"
import suggests from "../json/suggests.json"
import ranks from "../json/rank.json"
import recents from "../json/recent.json"

export default function Home() {
  return (
    <>
    <Header/>
    <Row>
        <Col
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <IsProcessHomeList processes={processes} />
        </Col>
        <Col
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
          xl={{ span: 12 }}
        >
          <ReadyGoHomeList collections={collections} />
        </Col>
      </Row>

      <Row className="row">
        <Col>
          <ReviewList reviews={reviews} />
        </Col>
        <Col>
          <SuggestHomeList suggests={suggests} />
        </Col>
        <Col>
          <RankList ranks={ranks} />
        </Col>
        <Col>
          <RecentList recents={recents} />
        </Col>
      </Row>
      
      {/* <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link> */}
    </>
  );
}
