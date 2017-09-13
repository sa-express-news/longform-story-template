// @flow

import React from 'react';

import './Fact.css';

//I didn't name it Fact because eslint got mad, since we're declaring another Fact below.
type FactType = {
    number: string,
    text: string
};

const Fact = ({ fact }: { fact: FactType }) => {
    return (
        <p className='Fact'><span>{fact.number}</span> {fact.text}</p>
    )
}

export default Fact;