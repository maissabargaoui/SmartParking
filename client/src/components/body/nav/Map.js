import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken='pk.eyJ1IjoibWF5NSIsImEiOiJjbDc5ZDJoc2swaWJ4M3FzOTZjYzE3YTE3In0.D0QMP0tR6JW1u4sPJdfo4Q';


class Mapp extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: -60,
			lat: 10 ,
			zoom: 5
		}
	}

	componentDidMount() {
		// Set up map 
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/may5/cl79fzayb002d15nqxq7x429j',
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})
	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100%',height:'100vh'}} />
			</div>
		)
	}
}

export default Mapp;

