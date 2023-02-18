import React, { Component } from 'react'
import Header from 'parts/Header'
import Hero from 'parts/Hero';
import DataLandingPage from "assets/json/landingPage.json";
import MostPicked from 'parts/MostPicked';

export default class LandingPage extends Component {

	constructor(props){
		super(props);
		this.refMostPicked = React.createRef();
	};

	render() {

		return (
			<>
				<Header {...this.props}></Header>
				<Hero refMostPicked={this.refMostPicked} data={DataLandingPage.hero} />
				<MostPicked refMostPicked={this.refMostPicked} data={DataLandingPage.mostPicked} />
			</>
		)
	}
}
