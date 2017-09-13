// @flow

import React from 'react';
import Fact from '../Fact';
// import LeftYellowBorder from '../LeftYellowBorder';

import './FactBox.css';

type Props = {
    title: string,
    source: string,
    facts: Array<object>
};

const FactBox = (props: Props) => {
    const facts = props.facts.map((fact, index) => {
        return <Fact fact={fact} key={index} />
    });

    return (
        <div className='FactBox'>
            {/* <LeftYellowBorder> */}
            <p className='FactBox-Title'>{props.title}</p>
            {facts}
            <p className='FactBox-Source'>Source: {props.source}</p>
            {/* </LeftYellowBorder> */}
        </div>
    )
}

export default FactBox;