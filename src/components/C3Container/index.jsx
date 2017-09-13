// @flow

import React from 'react';

type Data = {
    title: string,
    chatter: string,
    id: string,
    source: string,
    credit: string
};

import './C3Container.css';

const C3Container = ({ data }: { data: Data }) => {
    return (
        <div className='C3-Container'>
            <p className='C3-Title'>{data.title}</p>
            <p className='C3-Chatter'>{data.chatter}</p>
            <div className='C3-Chart' id={data.id} />
            <p className='C3-Source'>Source: {data.source}</p>
            <p className='C3-Credit'>Graphic by {data.credit}</p>
        </div>
    )
}

export default C3Container;