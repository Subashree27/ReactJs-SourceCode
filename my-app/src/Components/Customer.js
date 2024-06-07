import React from "react"
function Cust({User}){
 const Name=User.CustomerName;
 const Acc=User.AccountNumber;
 const Pan=User.PANNumber;
 const Bal=User.Accountbalance;
 return(
 <div>
    <h1>
     Name:{Name}<br/>
     AccountNo:{Acc}<br/>
     PanNo:{Pan}<br/>
    Balance:{Bal}
   </h1>
 </div>)
}
export default Cust;