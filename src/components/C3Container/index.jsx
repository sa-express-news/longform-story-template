// @flow

import React from 'react';

import './C3Container.css';

const C3Container = (props) => {
    return (
        <div className='C3Container'>
            <h3>{props.title}</h3>
            <h5>{props.chatter}</h5>
            <div id={props.id} />
            <p><strong>Source:</strong> {props.source}</p>
            <p><strong>Graphic by</strong> {props.credit}</p>
        </div>
    )
}

export default C3Container;