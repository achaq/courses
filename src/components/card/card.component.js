import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src ={`https://picsum.photos/id/${props.course.id}/300`}/>
        <h2> {props.course.name}</h2>
        <p> {props.course.email}</p>
    </div>
)
