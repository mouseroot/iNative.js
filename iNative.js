/*
	iNative.js
	Simple script to make your web apps act more native on ios
*/
if(navigator.userAgent.indexOf("iPhone") != -1)
{
	//Prevent Safari spring behavoir
	document.addEventListener("touchmove",function(e) {
		e.preventDefault();
	});

	//Handle device orientation
	window.onorientationchange = function() 
	{
		if (Math.abs(window.orientation) === 90) 
		{
	    	// Landscape
	    	landscape();
		} 
		else 
		{
			// Portrait
			portrait();
		}
		getCurrentViewport();
	}

	//Function to get the current window dimensions
	function getCurrentViewport() 
	{
		alert(window.innerWidth + " : " + window.innerHeight);
	}
}
else
{
	console.log("iPhone not detected");
}

