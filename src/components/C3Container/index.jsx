// @flow

import React, { Component } from 'react';
import c3 from 'c3';

import c3Objects from '../../c3-objects';

type Data = {
    title: string,
    chatter: string,
    id: string,
    source: string,
    credit: string
};

type Props = {
    [key: string]: Data
};

type State = {
    graphic: any,
};

import './C3Container.css';

class C3Container extends Component {
    state: State;

    _mapNode: ?HTMLDivElement;

    constructor(props: Props) {
        super(props);
        this.state = {
            graphic: null,
        };
        this._mapNode = null;
    }

    componentDidMount() {
        if (!this.state.graphic && this.isEssentialDataAvailable()) this.init(this._mapNode);
    }

    isEssentialDataAvailable() {
        return this._mapNode && c3Objects[this.props.data.id];
    }

    buildGraphic(node: ?HTMLDivElement, c3Obj: any) {
        c3Obj.bindto = node;
        return c3.generate(c3Obj);
    }

    init(node: ?HTMLDivElement) {
        const graphic = this.buildGraphic(node, c3Objects[this.props.data.id]);
        this.setState({ graphic });
    }

    render() {
        const { data } = this.props;
        return (
            <div className='C3-Container'>
                <p className='C3-Title'>{data.title}</p>
                <p className='C3-Chatter'>{data.chatter}</p>
                <div className='C3-Chart' ref={(node) => this._mapNode = node} id={data.id} />
                <p className='C3-Source'>Source: {data.source}</p>
                <p className='C3-Credit'>Graphic by {data.credit}</p>
            </div>
        )
    }
}

export default C3Container;