import React from 'react';
import Waleed from './../mes.json';

function About() {
	console.log(Waleed)
	Object.keys(Waleed).map(keyName=>{
		console.log(keyName)
		
		console.log(keyName.message)
		return(
			<div>
				<h1>Object</h1>
			</div>
		);
	})
	
  return (
	<div>
		<h1 class="about-h1">ABOUT SHOE STORE</h1>
		<p class="about-p">Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.
Based in Beaverton, Oregon, NIKE, Inc. includes the Nike, Converse, and Jordan brands.</p>
	</div>
	
  );
}

export default About;
