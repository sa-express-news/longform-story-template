// @flow

import React from 'react';
import Customs from './components';

type Props = {
    component: string
};

export default (props: Props) => {
    const CustomComponent = Customs[props.component];
    return (
        <div className='Custom-Container'>
            <CustomComponent {...props} />
        </div>
    )
};