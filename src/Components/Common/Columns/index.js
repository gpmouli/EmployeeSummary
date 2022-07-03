import { Col, Row, Card } from "antd";
const Columns = (props) => {
  return (
    <Row>
      <Col xs={2} sm={4} md={6} lg={8} xl={9}></Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={6}>
        <Card title={props.title} bordered={false}>
          {props.children}
        </Card>
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={9}></Col>
    </Row>
  );
};

export default Columns;
