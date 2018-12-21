var bannerStatus = 1;
var bannerTimer = 4000;

// slider starts working on load
window.onload = function() {
    bannerLoop();  
    var startBannerLoop = setInterval(function() {
    bannerLoop();
    }, bannerTimer);
    // on mouse over loop stops
    document.getElementById("main-banner").onmouseover = function() {
        console.log("Inside onmouseover function")
        clearInterval(startBannerLoop);
    },
    // on mouse out it restarts sliding to the right
    document.getElementById("main-banner").onmouseout = function() {
        startBannerLoop = setInterval(function() {
    bannerLoop();
    }, bannerTimer);
    }
    // on click on the left arrow on the slider it slides back
    document.getElementById("imgbanbtn-prev").onclick = function() {
        console.log("Inside bannerLoop2 function")
        bannerLoop2();
    }
    // on click on the right arrow on the slider it slides forward
    document.getElementById("imgbanbtn-next").onclick = function() {
        bannerLoop();
    }
}
// first loop to slide pictures to the right
function bannerLoop() {
	if (bannerStatus === 1) {
		console.log("insideBannerLoop")
		document.getElementById("language").style.opacity="0";
		setTimeout(function() {
			document.getElementById("work").style.right="0px";
			document.getElementById("work").style.zIndex="4"; 
			document.getElementById("language").style.right="-350px"; 
			document.getElementById("language").style.zIndex="3"; 
			document.getElementById("yoga").style.right="350px"; 
			document.getElementById("yoga").style.zIndex="2"; 
			document.getElementById("travel").style.right="700px"; 
			document.getElementById("travel").style.zIndex="1"; 
		}, 500);
		setTimeout(function() {
			document.getElementById("language").style.opacity="1"; 
		}, 1000);
		
		bannerStatus = 2;
	}
	else if (bannerStatus === 2) {
		document.getElementById("yoga").style.opacity="0"; 
		setTimeout(function() {
			document.getElementById("language").style.right="0px";
			document.getElementById("language").style.zIndex="4"; 
			document.getElementById("yoga").style.right="-350px"; 
			document.getElementById("yoga").style.zIndex="3"; 
			document.getElementById("travel").style.right="350px"; 
			document.getElementById("travel").style.zIndex="2"; 
			document.getElementById("work").style.right="700px"; 
			document.getElementById("work").style.zIndex="1"; 
		}, 500);
		setTimeout(function() {
			document.getElementById("yoga").style.opacity="1"; 
		}, 1000);
		
		bannerStatus = 3;
	}
	else if (bannerStatus === 3) {
		document.getElementById("travel").style.opacity="0"; 
		setTimeout(function() {
			document.getElementById("yoga").style.right="0px";
			document.getElementById("yoga").style.zIndex="4"; 
			document.getElementById("travel").style.right="-350px"; 
			document.getElementById("travel").style.zIndex="3"; 
			document.getElementById("work").style.right="350px"; 
			document.getElementById("work").style.zIndex="2"; 
			document.getElementById("language").style.right="700px"; 
			document.getElementById("language").style.zIndex="1"; 
		}, 500);
		setTimeout(function() {
			document.getElementById("travel").style.opacity="1"; 
		}, 1000);
		
		bannerStatus = 4;
	}
	else if (bannerStatus === 4) {
		document.getElementById("work").style.opacity="0"; 
		setTimeout(function() {
			document.getElementById("travel").style.right="0px";
			document.getElementById("travel").style.zIndex="4"; 
			document.getElementById("work").style.right="-350px"; 
			document.getElementById("work").style.zIndex="3"; 
			document.getElementById("language").style.right="350px"; 
			document.getElementById("language").style.zIndex="2"; 
			document.getElementById("yoga").style.right="700px"; 
			document.getElementById("yoga").style.zIndex="1"; 
		}, 500);
		setTimeout(function() {
			document.getElementById("work").style.opacity="1"; 
		}, 1000);
		
		bannerStatus = 1;
	}
}
// second loop to slide pictures to the left		
function bannerLoop2() {
	if (bannerStatus === 1) {
		console.log("insideBannerLoop")
		document.getElementById("travel").style.opacity="0";
		setTimeout(function() {
			document.getElementById("work").style.left="0px";
			document.getElementById("work").style.zIndex="4"; 
			document.getElementById("travel").style.left="-350px"; 
			document.getElementById("travel").style.zIndex="3"; 
			document.getElementById("yoga").style.left="350px"; 
			document.getElementById("yoga").style.zIndex="2"; 
			document.getElementById("language").style.left="700px"; 
			document.getElementById("language").style.zIndex="1"; 
			}, 500);
			setTimeout(function() {
			document.getElementById("travel").style.opacity="1"; 
			}, 1000);
		
			bannerStatus = 2;
			}
		else if (bannerStatus === 2) {
			document.getElementById("yoga").style.opacity="0"; 
			setTimeout(function() {
				document.getElementById("travel").style.left="0px";
				document.getElementById("travel").style.zIndex="4"; 
				document.getElementById("yoga").style.left="-350px"; 
				document.getElementById("yoga").style.zIndex="3"; 
				document.getElementById("language").style.left="350px"; 
				document.getElementById("language").style.zIndex="2"; 
				document.getElementById("work").style.left="700px"; 
				document.getElementById("work").style.zIndex="1"; 
				}, 500);
				setTimeout(function() {
				document.getElementById("yoga").style.opacity="1"; 
				}, 1000);
		
				bannerStatus = 3;
			}
		else if (bannerStatus === 3) {
			document.getElementById("language").style.opacity="0"; 
				setTimeout(function() {
				document.getElementById("yoga").style.left="0px";
				document.getElementById("yoga").style.zIndex="4"; 
				document.getElementById("language").style.left="-350px"; 
				document.getElementById("language").style.zIndex="3"; 
				document.getElementById("work").style.left="350px"; 
				document.getElementById("work").style.zIndex="2"; 
				document.getElementById("travel").style.left="700px"; 
				document.getElementById("travel").style.zIndex="1"; 
				}, 500);
				setTimeout(function() {
				document.getElementById("language").style.opacity="1"; 
				}, 1000);
		
				bannerStatus = 4;
			}
		else if (bannerStatus === 4) {
			document.getElementById("work").style.opacity="0"; 
			setTimeout(function() {
				document.getElementById("language").style.left="0px";
				document.getElementById("language").style.zIndex="4"; 
				document.getElementById("work").style.left="-350px"; 
				document.getElementById("work").style.zIndex="3"; 
				document.getElementById("travel").style.left="350px"; 
				document.getElementById("travel").style.zIndex="2"; 
				document.getElementById("yoga").style.left="700px"; 
				document.getElementById("yoga").style.zIndex="1"; 
				}, 500);
				setTimeout(function() {
				document.getElementById("work").style.opacity="1"; 
				}, 1000);
				bannerStatus = 1;
			}
} 
	
