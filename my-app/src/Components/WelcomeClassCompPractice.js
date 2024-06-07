import React from 'react';
class WelcomeStudents extends React.Component{
    render(){
        return( <div>
            <h1>Hello {this.props.className} to the react class,comp and I play {this.props.sportsname}</h1>
            <h2>Our subject is {this.props.subject} and joined month is {this.props.month}</h2>
            </div>
    ) 
    }
}
export default WelcomeStudents
