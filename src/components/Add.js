import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import {  useNavigate } from 'react-router-dom';
import './Home.css';

function Add() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    let history = useNavigate();
    const handleSubmit =(e) => {
        e.preventDefault();

        const id = uuid();
        let uniqueId = id.slice(0,8);

        let a = name,
        b=age;

        Employees.push({ id:uniqueId, Name:a, Age:b});

        history("/");

    }

    return (
        <div className="">
            <div className="Admin"> Create the new entry</div>
        <Form className = "d-grid gap-2" style = {{margin : "2rem"}}>
            <Form.Group className = "mb-3" controlled = "formName">
                <Form.Control type = "text" placeholder = "Enter Name" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className = "mb-3" controlled = "formAge">
                <Form.Control type = "text" placeholder = "Enter Age" required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick = {(e)=> handleSubmit(e)}type = "submit">Submit</Button>
        </Form>
       
        </div>
    )
}
export default Add;
