import React,{Component} from 'react';
class ClickCount extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState(prevState => {
            return{count:prevState.count+1}
    })
        }
render() {

        const {count}= this.state
        return(
            <button onClick={this.increment}> Clicked {count} times</button>
        )
}
}
export default ClickCount;