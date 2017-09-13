// @flow

import React from 'react';

import './C3Container.css';

const C3Container = (props) => {
    return (
        <div className='C3-Container'>
            <p className='C3-Title'>{props.title}</p>
            <p className='C3-Chatter'>{props.chatter}</p>
            <div className='C3-Chart' id={props.id} />
            <p className='C3-Source'>Source: {props.source}</p>
            <p className='C3-Credit'>Graphic by {props.credit}</p>
        </div>
    )
}

export default C3Container;