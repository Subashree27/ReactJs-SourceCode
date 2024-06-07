import React from "react";
import Cust from "./Customer";
function CustomerList(){
    const customers =[{
    CustomerName:'Suba',
    AccountNumber:1001,
    PANNumber:101111,
    Accountbalance:1000,
    },
    {
        CustomerName:'Shree',
        AccountNumber:1002,
        PANNumber:101112,
        Accountbalance:2000,
    },
    {
        CustomerName:'Vicky',
        AccountNumber:1003,
        PANNumber:101113,
        Accountbalance:3000,
    },
    {
        CustomerName:'Hari',
        AccountNumber:1004,
        PANNumber:101114,
        Accountbalance:4000,
    }
]
const Customer=customers.map(customers=><Cust User={customers}></Cust>)
    return(
        <div>
            {Customer}
        </div>
    )
}
export default CustomerList;