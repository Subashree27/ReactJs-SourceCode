import React,{Component} from "react";
import axios from "axios";
class PostDatafromForm extends Component{
    constructor(props){
        super(props)
        this.state={
            postId:'',
            username:'',
            name:'',
            email:'',
            address:''    
         }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
       .then(response=>{
        console.log(response)
        })
       .catch(error=>{
        console.log(error)
        })
    }
    render() {
        const {postId,username,name,email,address}=this.state
        return(
            <div>
          <form action="" onSubmit={this.submitHandler}>
          <div>
                <input type="text" name="postId" value={postId} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="username" value={username} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="name" value={name} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="email" value={email} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type="text" name="address" value={address} onChange={this.changeHandler}/>
            </div>
            <button type="submit">Submit</button>

          </form>
          </div>
        )
    }
}
export default PostDatafromForm;