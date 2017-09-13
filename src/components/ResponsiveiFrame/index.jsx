// @flow

import React from 'react';

type Props = {
	src: string
};

import './ResponsiveiFrame.css';

const ResponsiveiFrame = (props: Props) => {
	return (
		<div className='iFrameContainer'>
			<iframe src={props.src} frameBorder='0' allowFullScreen='true' />
		</div>
	)
}

export default ResponsiveiFrame;