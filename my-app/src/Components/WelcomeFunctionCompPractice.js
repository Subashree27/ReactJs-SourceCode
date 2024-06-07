import React from 'react';
const Welcome=(props)=>{
    console.log(props)
    return(
        <div>
            <h1>Hello {props.class} I play {props.sportsname}</h1>
            <h2>Our world class I go to is {props.subject} which month I join is {props.month}</h2>
            <p>In the summer of 2002, a Canadian Web Accessibility[1] consultancy did an informal survey to see if implementing accesskeys caused issues for users of adaptive technology, especially screen reading technology used by blind and low vision users. These users require numerous keyboard shortcuts to access web pages, as “pointing and clicking” a mouse is not an option for them. Their research showed that most key stroke combinations did in fact present a conflict for one or more of these technologies, and their final recommendation was to avoid using accesskeys altogether.</p>
            {props.children}
        </div>
    )
}
export default Welcome;