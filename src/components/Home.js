import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Employees from './Employees';
import './Home.css';

function Home() {

    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);
    };

    const handleDelete = (id) => {
        // taking id as parameter and returning that emp from array.
        //WHEN we click on delete button it is taking the id of the object and it is going to our employee array 
        //so based on index it is going to array and deleting it. 
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);
        Employees.splice(index, 1);

        history('/');
    }
    return (
        <Fragment>
            <div className='Admin'>Adim panel</div>
            <div style={{ margin: "5rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0 // if we were using external api or web api at that time also we must be using this
                                ? Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Age}
                                            </td>
                                            <td>
                                                <Link to={'/edit'}>
                                                <Button onClick={() => handleEdit(item.id, item.Name, item.Age )}> EDIT </Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => handleDelete(item.id)}> DELETE </Button>
                                            </td>
                                        </tr>
                                    )

                                })
                                : " No  data found"
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className='d-grid gap-2' to='/create'>
                    <Button size="lge">Create</Button>
                </Link>
            </div>
        </Fragment>

    )
}
export default Home;