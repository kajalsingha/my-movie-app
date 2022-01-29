
import React, { useRef, useState, Component} from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"

import "../App.css"
import {Link, NavLink, Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"
//import { auth } from "../component/firebase"
import firebase from "firebase/compat/app"
import Login from "./Login2"



export default function Hoop()   {
  const nameRef=useRef()
  const emailRef=useRef()
  const passwordRef=useRef()
  const confirm_passwordRef=useRef()
 
  async function handleSubmit(e)
  {
    e.preventDefault();
    if (passwordRef.current.value !== confirm_passwordRef.current.value) {
      return alert("Passwords do not match")
    }
    else
    {
      firebase.auth().createUserWithEmailAndPassword(
        emailRef.current.value, passwordRef.current.value)
    }
  }
  
 
    return (
      <>
      <Card> <Card.Body>
        <div >
        <h2 className="text-center mb-1">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name" ref={nameRef} required/>
          </Form.Group>
          <Form.Group id="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="email" ref={emailRef} required/>
          </Form.Group>
          <Form.Group id="Password">
            <Form.Label>Pass</Form.Label>
            <Form.Control type="text" placeholder="password" ref={passwordRef} required/>
          </Form.Group>
          <Form.Group id="Confirm_password">
            <Form.Label>C_pass</Form.Label>
            <Form.Control type="text" placeholder="confirm_password" ref={confirm_passwordRef} required/>
          </Form.Group>
          <br></br>
          <Button  type="submit" className="button" >Sign up</Button>
          
        </Form>
      </div>
      </Card.Body>
     </Card>
      <div className="App-text">
        Already have an account? 
      </div>
      </>
    )
  }

