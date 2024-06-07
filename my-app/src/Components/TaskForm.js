import React from "react";
import './Task.css'
function MyForm(){
return(
<form>
    <div class="Fill">
    <label>UserName</label>
    <input className="form-control ms-auto" type="text"></input>
    <div>
        <label>Password</label>
        <input type="password"></input>
    </div>
    <button>Submit</button>
    </div>
</form>)
}
export default MyForm