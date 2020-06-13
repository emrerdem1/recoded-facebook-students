import React, { useState, useRef } from "react";
import { db, provider } from "./firebase";
import { Form, Col, Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const SignUpPage = () => {
  const input_city = useRef();
  const input_brief = useRef();

  const [userObject, setUserObject] = useState({
    name: 'The name in Google for the account',
    userId: 'The unique user ID (available via Google. Please dont make a user ID yourself)',
    imageUrl: ' The Google profile picture of the image (available via Google)',
    profile: '',
    city: '',
    email: ''
  });

  const signViaGoogle = () => {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      let genelprops = result.user;
      let { email, displayName, photoURL, uid } = result.user;
      console.log(genelprops);
      return setUserObject(prev => ({ ...prev, name: displayName, imageUrl: photoURL, userId: uid }))
    })
      .catch(function (error) {
        console.log(error)
        /*var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;*/
      })
  };

  const setProfile = (e) => {
    e.preventDefault();
    db.collection("profiles").doc(userObject.userId).set(userObject);
  };
  const inputHandle = (e) => setUserObject({ ...userObject, [e.target.id]: e.target.value });
  return (
    <Form>
      <Form.Row>
        <Col xl={1}>
          <Button onClick={signViaGoogle}>Login</Button>
        </Col>
        <Col xl={2}>
          <Form.Control id='city' value={userObject.city} ref={input_city}
            onChange={inputHandle}
            placeholder="City" />
        </Col>
        <Col xl={2}>
          <Form.Control id='profile' value={userObject.brief} ref={input_brief}
            onChange={inputHandle} placeholder="Describe yourself briefly" />
        </Col>
        <Col xl={2}>
          <Button onClick={setProfile} >Set Your Profile</Button>
        </Col>
      </Form.Row>
      {console.log(userObject)}
    </Form>);
};

export default SignUpPage;
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