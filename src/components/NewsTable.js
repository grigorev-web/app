import React from 'react';



export default function NewsTable(props){

    

    
    return(
        <ul>
        {props.data.result.news.map((nw, index) => (
          <li key={index}>{nw}</li>
        ))}
        </ul>
    )
}