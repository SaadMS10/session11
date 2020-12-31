import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import jordan from './113677.jpg';
import home  from './home.jpg';
import Footer from "./Footer.js"

function Home() {
	

	
	const {ref,playState } = useWebAnimations({
		keyframes: [
			
			{ transform: 'translate(600px,0)' },
			{transform: 'translate(0, 0)'}
           
		  
		],
		timing: {
		//  delay: 500, // Start with a 500ms delay
		  duration: 800, // Run for 1000ms
		 // iterations: 2, // Repeat once
		 // direction: "alternate", // Run the animation forwards and then backwards
		  easing: "ease-in-out", // Use a fancy timing function
		},
	
	
	

	  });
	 
	
	

	
  return (
	<div>
		
		<img src={home} ref={ref} id="cloud" />
		<h1 id="head ">Volt Gold </h1>
		<div className="gradient-border" id="box">
	<p >This fresh take on the classic Air Jordan 1 pulls design cues from previous AJ1 colorways 
		that left a mark on the culture. The tongue features
		exposed foam and a transparent, reversed tag for a
		 deconstructed feel, while tri-tonal color blocking in volt,  sail and university gold adds a burst of bright 
		 energy to the timeless silhouette.</p>
		 </div>
		 <Footer/>
	</div>
	
  );
}

export default Home;
