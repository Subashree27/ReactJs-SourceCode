import React from "react";
const StudentInfo=(props)=>{
const{name}=props;
let grades=true;
let info;
if(grades){
    info=<div><h1>{name}The Students have got a good Marks</h1></div>
}
else{
    info=<div><h1>{name}Bad Marks</h1></div>
}
return(<div>{info}</div>)
}
export default StudentInfo;

