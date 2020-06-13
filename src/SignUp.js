import React from "react";
import db from "./firebase";
import { Form, Col, Button } from 'react-bootstrap';

const SignUpPage = () => {
  return (
    <Form>
      <Form.Row>
        <Col xl={2}>
          <Form.Control placeholder="City" />
        </Col>
        <Col xl={2}>
          <Form.Control placeholder="Describe yourself briefly" />
        </Col>
        <Col xl={2}>
          <Button>Set Your Profile</Button>
        </Col>
      </Form.Row>
    </Form>);
};

export default SignUpPage;
