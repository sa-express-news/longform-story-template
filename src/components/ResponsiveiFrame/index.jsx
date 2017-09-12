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

// class ResponsiveiFrame extends Component {
// 	props: {
// 		src: string,
// 	};

// 	render() {
// 		return (
// 			<div className='iFrameContainer'>
// 				<iframe src={this.props.src} frameBorder="0" allowFullScreen="true" />
// 			</div>
// 		)
// 	}
// }

export default ResponsiveiFrame;