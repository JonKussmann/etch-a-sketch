var mode = 0;
$(document).ready(function() {
	makeGrid(16);

	$(document).on('mouseenter', '.square', function() {
		if (mode == 1) {
			opac = parseFloat($(this).css("opacity"));

			if(opac == 0.1) {
            	$(this).css("opacity","0.3");
        	} else if (opac > .8) {
            	$(this).css("opacity","0.99");
        	} else {
            	opac += 0.2; 
            	$(this).css("opacity",opac);
        	}	
		} else {
		$(this).css("opacity", "1");
		}
	});

	$("#clear").click(function() {
		var size = parseInt(prompt("Enter new grid size between 1 and 100"));
		if (size >= 1 && size <= 100) {
			console.log(size);
			clearGrid();
			makeGrid(size);
		} else {
			alert("Invalid value");
			makeGrid(16);
		}
	});

	$("#gray_scale").click(function() {
		if (mode == 0){
			mode = 1;
			var size = parseInt(prompt("Enter new grid size between 1 and 100"));
			if (size >= 1 && size <= 100) {
				console.log(size);
				clearGrid();
				makeGrid(size);
			} else {
				alert("Invalid value");
				makeGrid(16);
			}
		} else {
			mode = 0;
			var size = parseInt(prompt("Enter new grid size between 1 and 100"));
			if (size >= 1 && size <= 100) {
				console.log(size);
				clearGrid();
				makeGrid(size);
			} else {
				alert("Invalid value");
				makeGrid(16);
			}
		}
	});

});

function makeGrid(dimension) {
	var width_height = 960;

	for (i=1; i <= dimension; i++) {
		$(".container").append("<div class='column'></div>");
	};
	for (i=1; i <= dimension; i++) {
		$(".column").append("<div class='square'></div>");
	};

	$(".container .square").height((width_height - 2*dimension)/dimension);
	$(".container .square").width((width_height - 2*dimension)/dimension);
	$(".column").height(width_height /dimension);

}

function clearGrid() {
	$(".container").empty();
}