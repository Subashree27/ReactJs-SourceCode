import React from "react";

class CountClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    CountInfo(props){
        this.setState({
            count:this.state.count+1
        }  
        )
    }
    DecreaseCount(props){
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.CountInfo()}>Increase</button>
                <div>
                <button onClick={()=>this.DecreaseCount()}>Decrease</button>
                </div>
            </div>
        )
    }
}
export default CountClass;