// @flow

import React, { Component } from 'react';

import './CustomContainerExample.scss';

type Props = {
	title: string,
	chatter: string,
	images: Array<string>,
	source: string,
	credit: string,
	component: string,
}

type State = {
	imgIdx: number,
}

class CustomContainerExample extends Component {
	state: State;

	constructor(props: Props) {
		super(props);
		this.state = {
			imgIdx: 0,
		}
	}

	componentDidMount() {
		setInterval(this.toggleImg.bind(this), 2000);
	}

	toggleImg() {
		const { imgIdx } = this.state;
		this.setState({ imgIdx: imgIdx ? 0 : 1 });
	}

	render() {
		const {
			title,
			chatter,
			source,
			images,
			credit,
		}			= this.props;

		return (
			<div className='WealthMap'>
                <p className='title'>{title}</p>
                <p className='chatter'>{chatter}</p>
                <div className='images'>
                	<img alt="" src={images[this.state.imgIdx]} />
                </div>
                <p className='source'>Source: {source}</p>
                <p className='credit'>Graphic by {credit}</p>
            </div>
		);
	}	
}

export default CustomContainerExample;