import React from 'react';

import { makeStyles } from '@material-ui/core';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';
import image7 from '../assets/images/7.jpg';
import image8 from '../assets/images/8.jpg';
import image9 from '../assets/images/9.jpg';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Sliders = () => {
	const useStyles = makeStyles((theme) => ({
		root: {},
	}));
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AutoplaySlider
				play={true}
				cancelOnInteraction={true}
				interval={3000}
				bullets={false}
			>
				<div data-src={image1} />
				<div data-src={image2} />
				<div data-src={image3} />
				<div data-src={image4} />
				<div data-src={image5} />
				<div data-src={image6} />
				<div data-src={image7} />
				<div data-src={image8} />
				<div data-src={image9} />
			</AutoplaySlider>
		</div>
	);
};

export default Sliders;
