import React from "react"
class Information extends React.Component{
 constructor(props){
    super(props)
    this.state={
        information:"Enjoy your Day"
    }
 }

 changeInfo(){
    this.setState({
        information:"Thank you"
    })
 }
 changepara(){
    this.setState({
        paragraph:"Very Good Bye!"
    })
 }
 
 render(){
    return(
        <div>
        <div><h1>{this.state.information}</h1></div>
        <button onClick={()=>this.changeInfo()}>Click to change state</button>
        <div>
            <p>{this.state.paragraph}The more and more the day get worsened..For these things happening Take rest don't get aggitated</p>
            <button onClick={()=>this.changepara()}>ChangePara</button>
        </div>
        </div>
    )
}
}
export default Information;
