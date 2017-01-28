(function($) {
    "use strict"; // Start of use strict

$(document).keyup(function(e){
	

    if(e.keyCode === 27){
		var hah = $(".portfolio-modal").attr("backto");
        //alert(hah);
		window.location.replace("index.html#"+hah);
	} else if (e.keyCode === 8){
		history.back();
	}
});

})(jQuery); // End of use strict