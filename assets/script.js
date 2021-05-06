let container = document.querySelector("#grid-container");

//choose drawing dropdown
let chooseDrawing = document.querySelector("#dropdownBtn");
let menuContent = document.querySelector("#dropdown-content");

chooseDrawing.addEventListener("click", function() {
	if (menuContent.style.display === "none") {
		menuContent.style.display = "block";
		menuContent.classList.add("#dropdown-content");
	} else {
		menuContent.style.display = "none";
	}
});


//toggle on guide button to show instructions
let guide = document.querySelector("#guide");
let guideSteps = document.querySelector("#guideSteps");
let closeGuide = document.querySelector(".close");

guide.addEventListener("click", function() {
	if (guideSteps.style.display === "none") {
		guideSteps.style.display = "block";
		guideSteps.classList.add("#guideSteps");
	} else {
		guideSteps.style.display = "none";
	}
});

closeGuide.addEventListener("click", function() {
	guideSteps.style.display = "none";
})




//set background image for drawing 

//patterns
let sPat = document.querySelector("#sPat");
let cPat = document.querySelector("#cPat");
let pPat = document.querySelector("#pPat");
let dFPat = document.querySelector("#dFPat");
let mPat = document.querySelector("#mPat");

//buttons
let strawberry = document.querySelector('#strawberry');
let cherries = document.querySelector('#cherries');
let pomegranate = document.querySelector('#pomegranate');
let dragonFruit = document.querySelector('#dragonFruit');
let mango = document.querySelector('#mango');

//colors
let colorPalette = document.querySelector("#colorOptions");

let white = document.querySelector(".color1")
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let color4 = document.querySelector(".color4");
let color5 = document.querySelector(".color5");
let color6 = document.querySelector(".color6");
let eraser = document.querySelector(".eraser");


strawberry.addEventListener("click", function() {
	sPat.style.display = "block";
	menuContent.style.display = "none";
	//closer other patterns that may be open
	cPat.style.display = "none";
	pPat.style.display = "none";
	dFPat.style.display = "none";
	mPat.style.display = "none";

	//display colors
	color2.style.display = "block";
	color3.style.display = "block";
	color4.style.display = "block";
	color5.style.display = "block";
	color6.style.display = "block";

	//colors
	color2.style.backgroundColor = "#74ff18";
	color3.style.backgroundColor = "#3f900b";
	color4.style.backgroundColor = "#fb381e";
	color5.style.backgroundColor = "#ff7676";
	color6.style.backgroundColor = "#ff98b0";
	
})

cherries.addEventListener("click", function() {
	cPat.style.display = "block";
	menuContent.style.display = "none";
	//closer other patterns that may be open
	sPat.style.display = "none";
	pPat.style.display = "none";
	dFPat.style.display = "none";
	mPat.style.display = "none";

	//display colors
	color2.style.display = "block";
	color3.style.display = "block";
	color4.style.display = "block";
	color5.style.display = "none";
	color6.style.display = "none";

	//colors
	color2.style.backgroundColor = "#3f900b";
	color3.style.backgroundColor = "#fb381e";
	color4.style.backgroundColor = "#ff7676";
})

pomegranate.addEventListener("click", function() {
	pPat.style.display = "block";
	menuContent.style.display = "none";
	//closer other patterns that may be open
	sPat.style.display = "none";
	cPat.style.display = "none";
	dFPat.style.display = "none";
	mPat.style.display = "none";

	//display colors
	color2.style.display = "block";
	color3.style.display = "block";
	color4.style.display = "block";
	color5.style.display = "block";
	color6.style.display = "none";

	//colors
	color2.style.backgroundColor = "#b7215a";
	color3.style.backgroundColor = "#774440";
	color4.style.backgroundColor = "#931832";
	color5.style.backgroundColor = "#c11734";
})

dragonFruit.addEventListener("click", function() {
	dFPat.style.display = "block";
	menuContent.style.display = "none";
	//closer other patterns that may be open
	sPat.style.display = "none";
	cPat.style.display = "none";
	pPat.style.display = "none";
	mPat.style.display = "none";

	//display colors
	color2.style.display = "block";
	color3.style.display = "block";
	color4.style.display = "block";
	color5.style.display = "none";
	color6.style.display = "none";

	//colors
	color2.style.backgroundColor = "#4b961b";
	color3.style.backgroundColor = "#b7215a";
	color4.style.backgroundColor = "black";
})

mango.addEventListener("click", function() {
	mPat.style.display = "block";
	menuContent.style.display = "none";
	//closer other patterns that may be open
	sPat.style.display = "none";
	cPat.style.display = "none";
	pPat.style.display = "none";
	dFPat.style.display = "none";

	//display colors
	color2.style.display = "block";
	color3.style.display = "block";
	color4.style.display = "block";
	color5.style.display = "block";
	color6.style.display = "block";

	//colors
	color2.style.backgroundColor = "#74ff18";
	color3.style.backgroundColor = "#3f900b";
	color4.style.backgroundColor = "#fb381e";
	color5.style.backgroundColor = "#ff6b22";
	color6.style.backgroundColor = "#ffe429";
})

// use up/down arrow keys to switch colors---NOT PRIORITY

// const colors = ["color1", "color2", "color3", "color4", "color5", "color6"];

// function changeColor() {

// }

//click or drag to color pixels

let isPainting = false;


for (let i = 0; i < 30 * 30; i ++) {
	let pixels = document.createElement("div");
	pixels.classList.add("pixel");

	let currentColor = pixels.style.backgroundColor;
		currentColor = "transparent";

//click colors to paint with them

	//color1--white
	white.addEventListener("click", function() {
		currentColor = "white";
		if (white.style.boxShadow = "2px 2px") {

			color2.style.boxShadow = "none";
			color3.style.boxShadow = "none";
			color4.style.boxShadow = "none";
			color5.style.boxShadow = "none";
			color6.style.boxShadow = "none";
			eraser.style.boxShadow = "none";

		}
		
	})


	//color2
	color2.addEventListener("click", function() {
		currentColor = color2.style.backgroundColor;
		if (color2.style.boxShadow = "2px 2px") {
			
			white.style.boxShadow = "none";
			color3.style.boxShadow = "none";
			color4.style.boxShadow = "none";
			color5.style.boxShadow = "none";
			color6.style.boxShadow = "none";
			eraser.style.boxShadow = "none";
		}
		
	})

	//color3
	color3.addEventListener("click", function() {
		currentColor = color3.style.backgroundColor;
		if (color3.style.boxShadow = "2px 2px") {
			
			white.style.boxShadow = "none";
			color2.style.boxShadow = "none";
			color4.style.boxShadow = "none";
			color5.style.boxShadow = "none";
			color6.style.boxShadow = "none";
			eraser.style.boxShadow = "none";
		}
		
	})

	//color4
		color4.addEventListener("click", function() {
		currentColor = color4.style.backgroundColor;
		if (color4.style.boxShadow = "2px 2px") {
			
			white.style.boxShadow = "none";
			color2.style.boxShadow = "none";
			color3.style.boxShadow = "none";
			color5.style.boxShadow = "none";
			color6.style.boxShadow = "none";
			eraser.style.boxShadow = "none";
		}
		
	})

	//color5
		color5.addEventListener("click", function() {
		currentColor = color5.style.backgroundColor;
		if (color5.style.boxShadow = "2px 2px") {
			
			white.style.boxShadow = "none";
			color2.style.boxShadow = "none";
			color3.style.boxShadow = "none";
			color4.style.boxShadow = "none";
			color6.style.boxShadow = "none";
			eraser.style.boxShadow = "none";
		}
		
	})

	//color6
	color6.addEventListener("click", function() {
		currentColor = color6.style.backgroundColor;
		if (color6.style.boxShadow = "2px 2px") {
			
			white.style.boxShadow = "none";
			color2.style.boxShadow = "none";
			color3.style.boxShadow = "none";
			color4.style.boxShadow = "none";
			color5.style.boxShadow = "none";
			eraser.style.boxShadow = "none";
		}
		
	})


	//eraser
	eraser.addEventListener("click", function() {
		currentColor = "transparent";
		if (eraser.style.boxShadow = "2px 2px") {
			
			white.style.boxShadow = "none";
			color2.style.boxShadow = "none";
			color3.style.boxShadow = "none";
			color4.style.boxShadow = "none";
			color5.style.boxShadow = "none";
			color6.style.boxShadow = "none";
		}
		
	})

	//clear canvas
	let reset = document.querySelector("#reset");
	reset.addEventListener("click", function() {
	pixels.style.background = ""
	})


	// //clear canvas when a new pattern is picked
	menuContent.addEventListener("click", function() {
		pixels.style.background = ""
		currentColor = "transparent";
		
		white.style.boxShadow = "none";
		color2.style.boxShadow = "none";
		color3.style.boxShadow = "none";
		color4.style.boxShadow = "none";
		color5.style.boxShadow = "none";
		color6.style.boxShadow = "none";
		eraser.style.boxShadow = "none";
	})


//painting functions
	pixels.addEventListener("mousedown", function() {
		isPainting = true;
		pixels.style.backgroundColor = currentColor;
	})

	pixels.addEventListener("mouseenter", function() {
		if (isPainting){
			pixels.style.backgroundColor = currentColor;
		}
	})

	pixels.addEventListener("mouseup", function() {
		isPainting = false;
	})


	container.appendChild(pixels);
}

//download drawing to computer


// function download(drawing, link, filename) {
// 	var drawing = document.getElementById("#grid-container").download;
// 	var link = document.querySelector("#save")
// 	link.href = drawing.toDataURL();
// 	link.download = 'filename.jpeg';
// };




