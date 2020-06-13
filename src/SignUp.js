import React from "react";
import { db, provider } from "./firebase";
import { Form, Col, Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const SignUpPage = () => {

  const signViaGoogle = () =>
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      let genelprops = result.user;
      let { email, displayName, photoURL, uid } = result.user;
      console.log(genelprops)
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  /*firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
    }
    var user = result.user;
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    // ...
  });*/
  const setProfile = () => null;
  return (
    <Form>
      <Form.Row>
        <Col xl={1}>
          <Button onClick={signViaGoogle}>Login</Button>
        </Col>
        <Col xl={2}>
          <Form.Control placeholder="City" />
        </Col>
        <Col xl={2}>
          <Form.Control placeholder="Describe yourself briefly" />
        </Col>
        <Col xl={2}>
          <Button onClick={setProfile} >Set Your Profile</Button>
        </Col>
      </Form.Row>
    </Form>);
};

export default SignUpPage;
