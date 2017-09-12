// @flow

import React from 'react';

import './ResponsiveiFrame.css';

const ResponsiveiFrame = (props) => {
	return (
		<div className='iFrameContainer'>
			<iframe src={props.src} frameBorder='0' allowFullScreen='true' />
		</div>
	)
}

export default ResponsiveiFrame;