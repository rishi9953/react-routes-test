import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import Form from './Form';
import { DataGrid } from '@mui/x-data-grid';
// import MaterialTable from 'material-table';
import Header from '../Header';
import Footer from '../Footer';
import '../Dashboard.css';



const Employee = () => {

    const [details, setDetails] = useState([]);      
      const columns = [
        { field: "id", hide: true },
        // { headerName: 'id', field: 'id' },
        { headerName: 'ID', field: 'ID' },
        { headerName: 'FirstName', field: 'FirstName' },
        { headerName: 'LastName', field: 'LastName' },
        { headerName: 'Phone_No', field: 'Phone_No' },
        { headerName: 'Status', field: 'Status' },
      ];

      useEffect(() => {
          fetch("http://localhost:5000/api/read")
          .then(res=>res.json())
          .then(res=>{
              console.log(res)
              setDetails(res)
          })
      },[])


// export default class Employee extends Form {
    // const url="http://localhost:5000/api/read";
    // const [records, setRecords] = useState([]);


    // const formReg = Form.userRegistration;
    

    
    
    
    // const getDetails = (e) => {
        // e.preventDefault(); 
        // const userRecord = { ...formReg, id: new Date().getTime().toString()}
        // setRecords([ ...records, userRecord]);

            // Axios.get(url).then((res) =>{
            // Axios.get('http://localhost:5000/api/read').then((res) =>{    
                    // console.log(res.data);
                    // setDetails(res.data);
                // }).catch(err => {
                        // console.error(err)});
                
                // };

                
                return (<>
                <Header/>
                <Footer/>
                    {/* <div className="eDetails"> */}
                        {/* <button onClick={getDetails}>get details</button> */}
                        {/* {getDetails} */}
                        {/* {JSON.stringify(details)} */}
                        {/* {details.map((ID) => (
                            <div key={ID}>{ID}</div>
                        ))} */}
                    {/* </div> */}
                    <div style={{ height: 600, width: '83%' }} className="employee-container">
                        <h1 align="center">Employee Data</h1>

                        {/* <MaterialTable
                            title="Employee Data"
                            data={details}
                            columns={columns}
                        /> */}

                    <DataGrid
                        getRowId={(row) => row.ID}
                        title= "Employee Data"
                        rows={details}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                    />
                    </div>


                    </>

);
}
            
// export default class Employee extends React.Component {
            
//     state = {
//         details: [],
//     };

//     componentDidMount() {

//         Axios.get(`http://localhost:5000/api/read`).then((res) =>{
//             console.log(res.data);
//             this.setState({ details: res.data});
//         });
//     }

//     render(){ 
//        return (
//        <div className="eDetails">
//                 <ul>
//                     {this.state.details.map(detail => <li key={detail.ID}>{detail}</li>)}
//                 </ul>
//        </div>

//     );
// }
// }

export default Employee;
