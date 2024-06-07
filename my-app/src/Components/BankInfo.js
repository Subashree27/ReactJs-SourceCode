import React from "react";
function BankInfo(){
    const Bank=[
        {
            Name:"Suba",
            Branch:'Trichy',
            AccountNumber:1001,
            AccountBalance:1000,
        },
        {
            Name:"Shree",
            Branch:'Chennai',
            AccountNumber:1003,
            AccountBalance:2000,
        },
        {
            Name:'Vicky',
            Branch:'Banglore',
            AccountNumber:1004,
            AccountBalance:3000,
        }
    ]
const Banker=Bank.map(Bank=><h1>{Bank.Name}<br/>{Bank.Branch}<br/>{Bank.AccountNumber}{
}<br/>{Bank.AccountBalance}</h1>)
return(
<div>
    {Banker}
</div>
)
}
export default BankInfo;