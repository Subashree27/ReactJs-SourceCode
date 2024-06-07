import React, { Component} from 'react';
import axios from 'axios';
export class PostData extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
        componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response=>{
            console.log(response)
        
            this.setState({posts:response.data})
           })
            .catch(error=>{
                console.log(error);
            
        })
    }
        render(){
            const {posts} = this.state
            return(<div>
                <h1>List Of User Data</h1>
                {
                    posts.map(post=>{
                        return(
                            <div key={post.id}>
                                {/* <h1>Hello</h1> */}
                                <h1>UserId:{post.userId}</h1>
                                <h3>Title:{post.title}:null</h3>
                                <p><h3>Body:</h3>{post.body}</p>
                            </div>
                        )
                    })
                }
            </div>)
        }
    }
    export default PostData;