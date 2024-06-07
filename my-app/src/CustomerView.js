import React from 'react';
import CustomerViewTable from './CustomerViewTable.css'
export default function CustomerView({name,dept}){
    return(
        <div>
            <h3>CustomerList</h3>
            <h2>Student List</h2>
           
            <ul style={{listStyle:'none'}}>{
              name.map((customer,index)=><li key={index}>{customer} is in {dept[index]} department</li>)
            }
            </ul>

            <table id="table">
                <tr>
                    <th>Name</th>
                    <th>Dept</th>
                </tr>
               
                   {name.map((name,index)=><tr><td>{name}</td>
                   <td>{dept[index]}</td></tr>)}


            </table>
            
        </div>
    )
}