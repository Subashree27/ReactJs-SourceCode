import React, { useState } from 'react'
import CustomerView from './CustomerView';
 function CustomerAdd(){
    const[input,setInput]=useState('');
    const[customer,setCustomer]=useState([]);
    const[inp,setInp]=useState('');
    const[department,setDepartment]=useState([]);
   
    function addDepartment(){
        if(inp,input){
            setCustomer((prevstate)=>[...prevstate,input])
            setDepartment((prevState)=>[...prevState,inp]);
            setInp("")
            setInput("")

        }
    }
    return(
        <div>
            <h1>Add new Customer</h1>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <div>
            <input type="text" value={inp} onChange={(e)=>setInp(e.target.value)}/>
            <div>
            <button onClick={addDepartment}>DepartmentAdd</button>
            </div>
            </div>
            <CustomerView name={customer} dept={department}/>
            
        </div>
    )
}
export default CustomerAdd
