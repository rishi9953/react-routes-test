import React,{useState} from "react";
import Axios from 'axios';
import "./form.css";
// import Form from 'react-bootstrap/Form';
// import { Button, Form } from 'react-bootstrap';
import '../Dashboard.css';

import {
  MDBTypography,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';
import Header from '../Header';
import Footer from '../Footer';


const RegistrationFrom = () => {
    const url="http://localhost:5000/api/create";


    const [userRegistration, setUserRegistration] = useState({
        ID:"",
        FirstName: "",
        LastName: "",
        Phone_No: "",
        Status:"Active"
    });

    const [records, setRecords] = useState([]);
  //   const [id, setId] = useState([]);
  //   const [db, setDb] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/api/id")
  //     .then(res=>res.json())
  //     .then(res=>{
  //         setId(res)
  //     })
  // },[])
  // console.log(id);

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name , value);

        setUserRegistration({ ...userRegistration, [name] : value});
    }

    // Axios.get('http://localhost:5000/api/read').then(res => {
    //  const iD = res.body.ID;
    //  console.log(iD);
    // });
    // console.log(id);

    const handleSubmit = (e) =>{
      e.preventDefault();
    const fname = e.target.FirstName.value;
    const lname = e.target.LastName.value;
    const ID = parseInt(e.target.ID.value);
    const pn = e.target.Phone_No.value;
    // const userId = { ...id};
    // setDb([ ...db, userId]);
    // console.log(Array.isArray(id));



      if(fname === '' && lname === ''){
        alert('All fields are required');
      }
      else if(pn.length < 9){
        alert('Phone number should be greater than 9 digits');
      }
      else if(ID === null ){
        alert('ID is required');
      }
      // else if(id.includes(`ID: ${ID}`)){
      //   alert('Similar id detected in database!');
      // }
      else{
        Axios.post(
            url,{
                ID:parseInt(userRegistration.ID),
                FirstName: userRegistration.FirstName,
                LastName: userRegistration.LastName,
                Phone_No: userRegistration.Phone_No,
                Status: userRegistration.Status
            }
        ).then(res => {
            console.log(res.userRegistration);
        });

        const userRecord = { ...userRegistration, id: new Date().getTime().toString()};
        setRecords([ ...records, userRecord]);
        // console.log(records);
        setUserRegistration({ID:"", FirstName:"", LastName:"", Phone_No:"", Status:""});
        alert("successfully registered");
        console.log("Data Saved!");
      }
  }




    return (
        // <div>
        //     <form>
        //         <input placeholder="FirstName" type="text"></input>
        //         <input placeholder="LastName" type="text"></input>
        //         <input placeholder="Phone_No number" type="number"></input>
                // <input type="checkbox" name="Status" value="on"></input>
                // <label for="Status"> Active</label>
        //     </form>
        // </div>

        <>
                <Header/>
                <Footer/>

                {/* <form className="p-4"> */}
  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
  {/* <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control" />
        <label class="form-label" for="form3Example1">First name</label>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" />
        <label class="form-label" for="form3Example2">Last name</label>
      </div>
    </div>
  </div> */}

  {/* <!-- Email input --> */}
  {/* <div class="form-outline mb-4">
    <input type="email" id="form3Example3" class="form-control" />
    <label class="form-label" for="form3Example3">Email address</label>
  </div> */}

  {/* <!-- Password input --> */}
  {/* <div class="form-outline mb-4">
    <input type="password" id="form3Example4" class="form-control" />
    <label class="form-label" for="form3Example4">Password</label>
  </div> */}



  {/* <!-- Submit button --> */}
  {/* <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button> */}

    <form className='row g-3 p-4 w-25 position-absolute top-50 start-50 translate-middle mt-1 form-container' onSubmit={handleSubmit}>
    <MDBTypography tag='div' className='display-3 pb-3 mb-3 border-bottom'>
        Registration-Form
    </MDBTypography>
      <div className='col-md-12'>
        <MDBInput
          value={userRegistration.ID}
          name='ID'
          type='number'
          onChange={handleInput}
          id='validationCustom01'
          required
          label='ID'
          size='lg'
        />
      </div>
      <div className='col-md-12'>
        <MDBInput
          value={userRegistration.FirstName}
          name='FirstName'
          type='text'
          onChange={handleInput}
          id='validationCustom02'
          required
          label='FirstName'
          size='lg'
        />
      </div>
      <div className='col-md-12'>
        <MDBInput
          value={userRegistration.LastName}
          name='LastName'
          type='text'
          onChange={handleInput}
          id='validationCustom02'
          required
          label='LastName'
          size='lg'
        />
      </div>
      <div className='col-md-12'>
        <MDBInput
          value={userRegistration.Phone_No}
          name='Phone_No'
          type='number'
          onChange={handleInput}
          id='validationCustom02'
          required
          label='Phone_No'
          size='lg'
        />
      </div>
      <div className='col-md-12'>
        <MDBInput
          value={userRegistration.Status}
          name='Status'
          type='text'
          onChange={handleInput}
          id='validationCustom02'
          disabled
          label='Status'
          size='lg'
        />
      </div>
      <div className='col-12 d-grid mx-auto'>
        <MDBBtn type='submit' className='btn btn-primary'>Submit</MDBBtn>
      </div>
    </form>



{/* </form>                 */}

{/* <Form onSubmit={handleSubmit} >
  <Form.Group className="mb-3" controlId="formBasicID">
    <Form.Label>ID</Form.Label>
    <Form.Control type="number" name="ID" placeholder="Enter ID" value={userRegistration.ID} onChange={handleInput}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>FirstName</Form.Label>
    <Form.Control type="text" name="FirstName" placeholder="FirstName" value={userRegistration.FirstName} onChange={handleInput} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>LastName</Form.Label>
    <Form.Control type="text" name="LastName" placeholder="LastName" value={userRegistration.LastName} onChange={handleInput} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
    <Form.Label>Phone_No</Form.Label>
    <Form.Control type="text" name="Phone_No" placeholder="Phone_No" value={userRegistration.Phone_No} onChange={handleInput} />
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicStatus">
    <Form.Label>Status</Form.Label>
    <Form.Control type="text" name="Status" placeholder="Employee Status : ACTIVE" value={userRegistration.Status} onChange={handleInput} disabled />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}

    </>
    );
};

export default RegistrationFrom;




